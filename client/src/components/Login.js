import React from 'react';
import './Login.css';
import { Grid, Paper, Avatar, TextField, Button, IconButton } from '@mui/material';
import { LockPerson, Fingerprint } from '@mui/icons-material';
import { Link } from 'react-router-dom';
const Login = () => {
  
  const paperStyle = {backgroundColor: '#ADD8E6', padding: 20, height:'50vh', width: 300, margin: '20px auto'};
  const buttonStyle = {margin: '8px 0', height:'5vh', borderRadius: '10px', backgroundColor: '#4682BF', padding: 0};
  const textFieldStyle = {backgroundColor: '#FFFAFA', margin: '8px 0'};

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar>
            <LockPerson fontSize="medium"/>
          </Avatar>
          <h2><b>LOG IN</b></h2>
        </Grid>
        <TextField label='Email' placeholder='Enter email' style={textFieldStyle} fullWidth required/>
        <TextField label='Password' placeholder='Enter password' style={textFieldStyle} type="password" fullWidth required/>
        <Button type='submit' style={buttonStyle} fullWidth>
          <Fingerprint fontSize="large" color='success'/>&nbsp;<h2>Continue</h2>
        </Button>
        Need an Account? <Link to="/signup">Sign Up</Link>
      </Paper>
    </Grid>
  );
}

export default Login;