import React from 'react';
import './Login.css';
import { Grid, Paper, Avatar, TextField, Button, Box, IconButton } from '@mui/material';
import { LockPerson, Fingerprint } from '@mui/icons-material';
import { Link } from 'react-router-dom';
const Login = () => {
  
  const paperStyle = { backgroundColor: 'white', padding: 20, height:'50vh', width: 400, margin: '20px auto' };
  const buttonStyle = { margin: '8px 0', height: '5vh', borderRadius: '30px', backgroundColor: '#FFD700', padding: 0 };
  const textFieldStyle = { backgroundColor: 'white', margin: '8px 0', };
  const avatarStyle = { height: '70px', width: '70px', bgcolor: '#191970' };
  const lockPersonStyle = { fontSize: '2em', color: 'white' };
  const fingerprintStyle = { fontSize: '40px', color: 'black' };

  return (
    <Grid>
      <Paper elevation={0} style={paperStyle}>
        <Grid align='center'>
          <Avatar sx={avatarStyle}>
            <LockPerson sx={lockPersonStyle} />
          </Avatar>
          <h1><b>LOG IN</b></h1>
        </Grid>
        <TextField label='email' variant="outlined" placeholder='Enter email' style={textFieldStyle} fullWidth required/>
        <TextField label='password' variant="outlined" placeholder='Enter password' style={textFieldStyle} type="password" fullWidth required/>
        <Box textAlign='center'>
          <Button type='submit' style={buttonStyle} fullWidth>
            <Fingerprint sx={fingerprintStyle}/>&nbsp;<p style={{color: "black", fontSize: '20px'}}><b>Continue</b></p>
          </Button>         
        </Box>
        <br/> 
        Need an Account? <Link to="/signup">Sign Up</Link>
      </Paper>
    </Grid>
  );
}

export default Login;