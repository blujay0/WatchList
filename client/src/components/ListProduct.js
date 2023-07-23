import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Button, Box, IconButton, Divider } from '@mui/material';
import { Add, PlusOne } from '@mui/icons-material';

const ListProduct = () => {
  const [maker, setMaker] = useState();
  const [model, setModel] = useState();
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();
  const [inventory, setInventory] = useState();
  const [productDescription, setProductDescription] = useState();
  const [image, setImage] = useState();
  const [productID, setProductID] = useState();

  const paperStyle = { backgroundColor: 'white', padding: 20, height:'60vh', width: 400, margin: '20px auto' };
  const buttonStyle = { margin: '8px 0', height:'5vh', borderRadius: '30px', backgroundColor: '#627C79', padding: 0 };
  const textFieldStyle = { backgroundColor: 'white', margin: '8px 0' };
  const avatarStyle = { height: '70px', width: '70px', bgcolor: '#273248', fontSize: 30 };
  const addStyle = { fontSize: '2em', color: 'white' };
  const plusOneStyle = { fontSize: '40px', color: 'white' };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      image: image,
      inventory: inventory,
      maker: maker,
      model: model,
      product_description: productDescription,
      product_id: productID,
      product_name: productName,
      product_price: productPrice,
    }

    fetch(`/products`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then( resp => resp.json())
    .then( newProduct => console.log(newProduct))
  }



  return(
    <Grid>
      <Paper elevation={0} style={paperStyle}>
        <Grid align='center'>
          <Avatar sx={avatarStyle}>
            <PlusOne sx={plusOneStyle} />
          </Avatar>
          <h1><b>List Watch</b></h1>
        </Grid>
        <form>
          <TextField onChange={e => setMaker(e.target.value)} label='maker' placeholder='Enter product ' style={textFieldStyle} fullWidth required/>
          <TextField onChange={e => setModel(e.target.value)} label='model' placeholder='Enter product model' style={textFieldStyle} fullWidth required/>
          <TextField onChange={e => setProductName(e.target.value)} label='product_name' placeholder='Enter product name' style={textFieldStyle} fullWidth required/>        
          <TextField onChange={e => setProductPrice(e.target.value)} label='product_price' placeholder='Enter price' style={textFieldStyle} fullWidth required/>
          <TextField onChange={e => setInventory(e.target.value)} label='inventory' placeholder='Enter how many to list' style={textFieldStyle} type="number" fullWidth required/>
          <TextField onChange={e => setProductDescription(e.target.value)} label='product_description' placeholder='Enter short description' style={textFieldStyle} fullWidth required/>
          <TextField onChange={e => setImage(e.target.value)} label='image' placeholder='Enter image url' style={textFieldStyle} fullWidth required/>        
          <Box textAlign="center">
            <Button onClick={handleSubmit} type='submit' style={buttonStyle} fullWidth>
                <Add sx={addStyle}/>&nbsp;<p style={{color: "white", fontSize: '20px'}}><b>List</b></p>
            </Button>          
          </Box>
        </form>
      </Paper>
    </Grid>
  );

}

export default ListProduct;