import React from 'react';
import './Login.css';
import { Grid, Paper, Avatar } from '@mui/material';

const Login = () => {
  const paperStyle={padding: 20, height:'70vh', width: 280, margin: '20px auto'}

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        Log In
      </Paper>
    </Grid>
  );
}

export default Login;