import React from 'react';
import './SignUp.css';
import { Grid, Paper, Avatar, TextField, Button, IconButton } from '@mui/material';
import { LockPerson, Fingerprint } from '@mui/icons-material';
import { Link } from 'react-router-dom';
const SignUp = () => {
  
  const paperStyle = { backgroundColor: '#ADD8E6', padding: 20, height:'60vh', width: 400, margin: '20px auto' };
  const buttonStyle = { margin: '8px 0', height:'5vh', borderRadius: '10px', backgroundColor: '#FFD700', padding: 0 };
  const textFieldStyle = { backgroundColor: '#FFFAFA', margin: '8px 0' };
  const avatarStyle = { height: '70px', width: '70px', bgcolor: '#191970' };
  const lockPersonStyle = { fontSize: '2em', color: 'white' };
  const fingerprintStyle = { fontSize: '40px', color: 'black' };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar sx={avatarStyle}>
            <LockPerson sx={lockPersonStyle} />
          </Avatar>
          <h1><b>SIGN UP</b></h1>
        </Grid>
        <TextField label='name' placeholder='First and last name' style={textFieldStyle} fullWidth required/>
        <TextField label='email' placeholder='Enter email' style={textFieldStyle} fullWidth required/>
        <TextField label='address' placeholder='Enter your address' style={textFieldStyle} fullWidth required/>        
        <TextField label='password' placeholder='Enter password' style={textFieldStyle} type="password" fullWidth required/>
        <Button type='submit' style={buttonStyle} fullWidth>
          <Fingerprint sx={fingerprintStyle}/>&nbsp;<p style={{color: "black", fontSize: '20px'}}><b>Register</b></p>
        </Button>
        Already Have an Account? <Link to="/login">Log In</Link>
      </Paper>
    </Grid>
  );
}

export default SignUp;