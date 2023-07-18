import React from 'react';
import './Login.css';
import { Grid, Paper, Avatar, TextField, Button, Box, IconButton, Divider } from '@mui/material';
import { LockPerson, Fingerprint, Key } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  
  const paperStyle = { backgroundColor: 'white', padding: 20, height:'50vh', width: 400, margin: '20px auto' };
  const buttonStyle = { margin: '8px 0', height: '5vh', borderRadius: '30px', backgroundColor: '#627C79', padding: 0 };
  const textFieldStyle = { backgroundColor: 'white', margin: '8px 0', };
  const avatarStyle = { height: '70px', width: '70px', bgcolor: '#273248' };
  const lockPersonStyle = { fontSize: '2em', color: 'white' };
  const keyStyle = { fontSize: '40px', color: 'white' };
  const initialValues={
    email:'',
    password:'',
  }
  const validationSchema=Yup.object({
    username: Yup.string().email('please enter valid email')
  })
  const onSubmit=(values,props)=>{}

  return (
    <Grid>
      <Paper elevation={0} style={paperStyle}>
        <Grid align='center'>
          <Avatar sx={avatarStyle}>
            <LockPerson sx={lockPersonStyle} />
          </Avatar>
          <h1><b>LOG IN</b></h1>
        </Grid>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {(props)=>(
            <Form>
              {console.log(props)}
              <Field as={TextField} label='email' name='email' variant="outlined" placeholder='Enter email' style={textFieldStyle} fullWidth required helperText={<ErrorMessage name="email"/>}/>
              <Field as={TextField} label='password' name='password' variant="outlined" placeholder='Enter password' style={textFieldStyle} type="password" fullWidth required/>
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
  );
}

export default Login;