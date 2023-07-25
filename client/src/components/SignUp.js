import React, { useState } from 'react';
import './SignUp.css';
import { Grid, Paper, Avatar, TextField, Button, Box, IconButton, Divider } from '@mui/material';
import { LockPerson, Fingerprint, Person } from '@mui/icons-material';
import { Link, useHistory } from 'react-router-dom';
import { ThemeContext } from './App.js'
import { useTheme } from './ThemeProvider'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [address, setAddress] = useState();
  // const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const history = useHistory(); 

  const paperStyle = { backgroundColor: 'white', padding: 20, height:'60vh', width: 400, margin: '20px auto' };
  const buttonStyle = { margin: '8px 0', height:'5vh', borderRadius: '30px', backgroundColor: '#627C79', padding: 0 };
  const textFieldStyle = { backgroundColor: 'white', margin: '8px 0' };
  const avatarStyle = { height: '70px', width: '70px', bgcolor: '#273248', fontSize: 30 };
  const personStyle = { fontSize: '2em', color: 'white' };
  const fingerprintStyle = { fontSize: '40px', color: 'white' };

  const darkTheme = useTheme();
  const themeStyles = {
    backgroundColor: darkTheme ? '#008B8B' : '#FFFFFF'
  }

  const initialValues={
    name:'',
    email:'',
    address:'',
    password:'',
  }
  // regex for containing only letters and spaces: /^[A-Za-z\s]*$/
  const validationSchema=Yup.object().shape({
    name:Yup.string().max(20).matches(/^[A-Za-z\s]*$/, 'full name must contain only letters and spaces').required('Required'),
    email:Yup.string().email('please enter valid email').required("Required"),
    address:Yup.string().required('please enter address'),
    password:Yup.string().required("Required").min(5, 'Password is too short - should be 5 characters minimum.').max(10, 'password too long - should be less than 11 characters'),
  })

  const handleSubmit = (values, props) => {
    const formData = {
      name: values.name,
      email: values.email,
      address: values.address,
      password: values.password
    }
    fetch(`/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.message) {
        setErrorMessage(data.message)
      } else {
        // setName(''); // clear textfield after successful submit
        props.resetForm();
        history.push('/login'); // redirect after successful submit
      }
    })  
  }

  return (
    <div style={themeStyles}>
      <Grid>
        <Paper elevation={0} style={paperStyle}>
          <Grid align='center'>
            <Avatar sx={avatarStyle}>
              <Person sx={personStyle} />
            </Avatar>
            <h1><b>SIGN UP</b></h1>
          </Grid>
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            {(props) => (
              <Form >
                <Field as={TextField} label='name' name='name' variant="outlined"  placeholder='First and last name' style={textFieldStyle} fullWidth required helperText={<ErrorMessage name="name"/>}/>
                <Field as={TextField} label='email' name='email' variant="outlined" placeholder='Enter email' style={textFieldStyle} fullWidth required helperText={<ErrorMessage name="email"/>}/>
                <Field as={TextField} label='address' name='address' variant="outlined" placeholder='Enter your address' style={textFieldStyle} fullWidth required helperText={<ErrorMessage name="address"/>}/>        
                <Field as={TextField} label='password' name='password' variant="outlined" placeholder='Enter password' style={textFieldStyle} type="password" fullWidth required helperText={<ErrorMessage name="password"/>}/>
                <Box textAlign="center">
                  {/* {errorMessage && <div style={{color:"red"}}>{errorMessage}</div>} */}
                  <Button type='submit' style={buttonStyle} fullWidth>
                      <Fingerprint sx={fingerprintStyle}/>&nbsp;<p style={{color: "white", fontSize: '20px'}}><b>Register</b></p>
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
          <center style={{fontSize: '20px'}}>Already Have an Account? <Link to="/login">Log In</Link></center>
        </Paper>
      </Grid>
    </div>

  );
}

export default SignUp;