import React, { useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Box, IconButton, Divider } from '@mui/material';
import { LockPerson, Fingerprint, Person, Notes, PostAdd } from '@mui/icons-material';

const EditProduct = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [password, setPassword] = useState();

  const paperStyle = { backgroundColor: 'white', padding: 20, height:'60vh', width: 400, margin: '20px auto' };
  const buttonStyle = { margin: '8px 0', height:'5vh', borderRadius: '30px', backgroundColor: '#627C79', padding: 0 };
  const textFieldStyle = { backgroundColor: 'white', margin: '8px 0' };
  const avatarStyle = { height: '70px', width: '70px', bgcolor: '#273248', fontSize: 30 };
  const notesStyle = { fontSize: '2em', color: 'white' };
  const postAddStyle = { fontSize: '40px', color: 'white' };

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const formData = {
  //     name: name,
  //     email: email,
  //     address: address,
  //     password: password
  //   }
  //   fetch(`/signup`, {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData)
  //   });   
  // }

  return(
    <Grid>
      <Paper elevation={0} style={paperStyle}>
        <Grid align='center'>
          <Avatar sx={avatarStyle}>
            <Notes sx={notesStyle} />
          </Avatar>
          <h1><b>Edit Product</b></h1>
        </Grid>
        <form>
          <TextField onChange={e => setName(e.target.value)} label='id' placeholder='Enter product id' style={textFieldStyle} fullWidth required/>
          <TextField onChange={e => setName(e.target.value)} label='maker' placeholder='Enter product ' style={textFieldStyle} fullWidth required/>
          <TextField onChange={e => setEmail(e.target.value)} label='model' placeholder='Enter product model' style={textFieldStyle} fullWidth required/>
          <TextField onChange={e => setAddress(e.target.value)} label='product_name' placeholder='Enter product name' style={textFieldStyle} fullWidth required/>        
          <TextField onChange={e => setPassword(e.target.value)} label='product_price' placeholder='Enter price' style={textFieldStyle} fullWidth required/>
          <TextField onChange={e => setName(e.target.value)} label='inventory' placeholder='Enter how many to list' style={textFieldStyle} type="number" fullWidth required/>
          <TextField onChange={e => setEmail(e.target.value)} label='product_description' placeholder='Enter short description' style={textFieldStyle} fullWidth required/>
          <TextField onChange={e => setAddress(e.target.value)} label='image' placeholder='Enter image url' style={textFieldStyle} fullWidth required/>        
          <Box textAlign="center">
            <Button type='submit' style={buttonStyle} fullWidth>
                <PostAdd sx={postAddStyle}/>&nbsp;<p style={{color: "white", fontSize: '20px'}}><b>Edit</b></p>
            </Button>          
          </Box>
        </form>
      </Paper>
    </Grid>
  );
}

export default EditProduct;