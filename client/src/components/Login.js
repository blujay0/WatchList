import React from 'react';
import './Login.css';
import { Grid, Paper, Avatar, TextField, Button} from '@mui/material';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import { Link } from 'react-router-dom';
const Login = () => {
  
  const paperStyle = {backgroundColor: '#ADD8E6', padding: 20, height:'70vh', width: 280, margin: '20px auto'};
  const avatarStyle = {backgroundColor:'#1bbd7e'};
  const buttonStyle = {margin: '8px 0'}
  const textFieldStyle = {backgroundColor: '#FFFAFA'}

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <LockPersonIcon />
          </Avatar>
          <h2><b>LOG IN</b></h2>
        </Grid>
        <TextField label='Email' placeholder='Enter email' style={textFieldStyle} fullWidth required/>
        <TextField label='Password' placeholder='Enter password' style={textFieldStyle} type="password" fullWidth required/>
        <Button type='submit' variant='contained' style={buttonStyle} color='primary' fullWidth>Continue</Button>
        Need an Account? <Link to="/signup">Sign Up</Link>
      </Paper>
    </Grid>
  );
}

export default Login;