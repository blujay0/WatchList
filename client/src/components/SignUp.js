import React, { useState } from 'react';
import './SignUp.css';
import { Grid, Paper, Avatar, TextField, Button, Box, IconButton, Divider } from '@mui/material';
import { LockPerson, Fingerprint, Person } from '@mui/icons-material';
import { Link } from 'react-router-dom';
const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [password, setPassword] = useState();

  const paperStyle = { backgroundColor: 'white', padding: 20, height:'60vh', width: 400, margin: '20px auto' };
  const buttonStyle = { margin: '8px 0', height:'5vh', borderRadius: '30px', backgroundColor: '#627C79', padding: 0 };
  const textFieldStyle = { backgroundColor: 'white', margin: '8px 0' };
  const avatarStyle = { height: '70px', width: '70px', bgcolor: '#273248', fontSize: 30 };
  const personStyle = { fontSize: '2em', color: 'white' };
  const fingerprintStyle = { fontSize: '40px', color: 'white' };

  const handleSubmit = (e) => {
    e.preventDefault()
      const formData = {
        name: name,
        email: email,
        address: address,
        password: password
      }
      fetch(`/signup`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });   
  }

  return (
    <Grid>
      <Paper elevation={0} style={paperStyle}>
        <Grid align='center'>
          <Avatar sx={avatarStyle}>
            <Person sx={personStyle} />
          </Avatar>
          <h1><b>SIGN UP</b></h1>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField onChange={e => setName(e.target.value)} label='name' placeholder='First and last name' style={textFieldStyle} fullWidth required/>
          <TextField onChange={e => setEmail(e.target.value)} label='email' placeholder='Enter email' style={textFieldStyle} fullWidth required/>
          <TextField onChange={e => setAddress(e.target.value)} label='address' placeholder='Enter your address' style={textFieldStyle} fullWidth required/>        
          <TextField onChange={e => setPassword(e.target.value)} label='password' placeholder='Enter password' style={textFieldStyle} type="password" fullWidth required/>
          <Box textAlign="center">
            <Button type='submit' style={buttonStyle} fullWidth>
                <Fingerprint sx={fingerprintStyle}/>&nbsp;<p style={{color: "white", fontSize: '20px'}}><b>Register</b></p>
            </Button>          
          </Box>
        </form>
        <br/>
        <br/>
        <Divider>OR</Divider>
        <br/>
        <br/>     
        <center style={{fontSize: '20px'}}>Already Have an Account? <Link to="/login">Log In</Link></center>
      </Paper>
    </Grid>
  );
}

export default SignUp;