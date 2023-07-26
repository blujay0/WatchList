import React, { useState, useContext } from 'react';
import './Login.css';
import { Grid, Paper, Avatar, TextField, Button, Box, IconButton, Divider } from '@mui/material';
import { LockPerson, Fingerprint, Key } from '@mui/icons-material';
import { Link, useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ThemeContext } from './App.js'
import { useTheme } from './ThemeProvider'
import { ErrorContext } from '../context/ErrorContext';

const Login = ({ setCustomer }) => {
  // destructure error context here
  const { error, setError } = useContext(ErrorContext)

  const [emailError, setEmailError] = useState('');

  const paperStyle = { backgroundColor: 'white', padding: 20, height:'50vh', width: 400, margin: '20px auto' };
  const buttonStyle = { margin: '8px 0', height: '5vh', borderRadius: '30px', backgroundColor: '#627C79', padding: 0 };
  const textFieldStyle = { backgroundColor: 'white', margin: '8px 0', };
  const avatarStyle = { height: '70px', width: '70px', bgcolor: '#273248' };
  const lockPersonStyle = { fontSize: '2em', color: 'white' };
  const keyStyle = { fontSize: '40px', color: 'white' };


  const history = useHistory();
  const darkTheme = useTheme();
  const themeStyles = {
    backgroundColor: darkTheme ? '#008B8B' : '#FFFFFF'
  }

  const initialValues={
    email:'',
    password:'',
  }

  const validationSchema=Yup.object().shape({
    email:Yup.string().email('please enter valid email').required("Required"),
    password:Yup.string().required("Required").min(5, 'Password is too short - should be 5 characters minimum.')
  })

  // example format for Login fetch if... else...
  // fetch('/login', {
  //   method: 'POST',
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(formData)
  // })
  // .then(resp => {
  //   if (resp.ok) { // if response is one of 200 status code
  //     resp.json().then((data) => {setCustomer(data)}); // set customer to customer attribute of data sent back from request
  //     props.resetForm(); // resets form after submit
  //     history.push('/');
  //   } else {
  //     resp.json().then(error => setError(error.error));
  //   }
  // })

  const handleSubmit = (values, props) => { // parameters are from formik docs
    // alert(JSON.stringify(values)) // uncomment to see what data is being returned
    const formData = {
      email: values.email, 
      password: values.password 
    }
    fetch(`/login`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then(resp => {
      // console.log(resp)
      if (resp.ok) { // if response is one of 200 status code
        resp.json().then((data) => {setCustomer(data)}); // set customer to customer attribute of data sent back from request
        props.resetForm(); // resets form after submit
        history.push('/');
      } else {
        resp.json().then(error => setEmailError(error.error));
      }
    })
    .catch(console.error)
  }

  return (
    <div style={themeStyles}>
      <Grid>
        <Paper elevation={0} style={paperStyle}>
          <Grid align='center'>
            <Avatar sx={avatarStyle}>
              <LockPerson sx={lockPersonStyle} />
            </Avatar>
            <h1><b>LOG IN</b></h1>
          </Grid>
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            {(props)=>(
              <Form>
                {/* {console.log(props)} */}
                <Field as={TextField} label='email' name='email' variant="outlined" placeholder='Enter email' style={textFieldStyle} fullWidth required helperText={<ErrorMessage name="email"/>}/>
                {emailError && <span style={{color: "red"}}>{emailError}</span>}
                <Field as={TextField} label='password' name='password' variant="outlined" placeholder='Enter password' style={textFieldStyle} type="password" fullWidth required helperText={<ErrorMessage name="password"/>}/>
                <Box textAlign='center'>
                  <Button type='submit' style={buttonStyle} fullWidth>
                    <Key sx={keyStyle}/>&nbsp;<p style={{color: "white", fontSize: '20px'}}><b>Continue</b></p>
                  </Button>         
                </Box>
              </Form>
            )}
          </Formik>

          <br/>
          <br/>
          <Divider>OR</Divider>
          <br/>
          <br/> 
          <center style={{fontSize: '20px'}}>Need an Account? <Link to="/signup">Sign Up</Link></center>
        </Paper>
      </Grid>
    </div>

  );
}

export default Login;