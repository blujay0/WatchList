import React from 'react';
import './Login.css';
import { Grid, Paper, Avatar, TextField, Button, Link} from '@mui/material';
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
          <h2>LOG IN</h2>
        </Grid>
        <TextField label='Email' placeholder='Enter email' fullWidth required/>
        <TextField label='Password' placeholder='Enter password' type="password" fullWidth required/>
        <Button type='submit' variant='contained' color='primary' fullWidth>Continue</Button>
        <Link>Link</Link>
      </Paper>
    </Grid>
  );
}

export default Login;