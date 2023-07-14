import React from 'react';
import './Login.css';
import { Grid, Paper, Avatar, TextField } from '@mui/material';
import LockPersonIcon from '@mui/icons-material/LockPerson';

const Login = () => {
  
  const paperStyle={padding: 20, height:'70vh', width: 280, margin: '20px auto'};
  const avatarStyle={backgroundColor:'#1bbd7e'}; 

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <LockPersonIcon />
          </Avatar>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Login;