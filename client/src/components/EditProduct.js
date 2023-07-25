import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Grid, Paper, Avatar, TextField, Button, Box, IconButton, Divider } from '@mui/material';
import { Notes, PostAdd } from '@mui/icons-material';
import { ThemeContext } from './App.js'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const EditProduct = () => {
  const [id, setID] = useState();
  const [maker, setMaker] = useState();
  const [model, setModel] = useState();
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();
  const [inventory, setInventory] = useState();
  const [productDescription, setProductDescription] = useState();
  const [image, setImage] = useState();

  const paperStyle = { backgroundColor: 'white', padding: 20, height:'60vh', width: 400, margin: '20px auto' };
  const buttonStyle = { margin: '8px 0', height:'5vh', borderRadius: '30px', backgroundColor: '#627C79', padding: 0 };
  const textFieldStyle = { backgroundColor: 'white', margin: '8px 0' };
  const avatarStyle = { height: '70px', width: '70px', bgcolor: '#273248', fontSize: 30 };
  const notesStyle = { fontSize: '2em', color: 'white' };
  const postAddStyle = { fontSize: '40px', color: 'white' };

  // useParams is used to grab from URL
  const { productId } = useParams();

  const initialValues={
    maker:'',
    model:'',
    address:'',
    password:'',
  }


  const handleSubmit = (values, props) => {
    const formData = {
      id: values.id,
      maker: values.maker,
      model: values.model,
      product_name: values.productName,
      product_price: values.productPrice,
      inventory: values.inventory,
      product_description: values.productDescription,
      image: values.image,
    }

    fetch(`/products/${productId}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    });
    
  }

  return(
    <Grid>
      <Paper elevation={0} style={paperStyle}>
        <Grid align='center'>
          <Avatar sx={avatarStyle}>
            <Notes sx={notesStyle} />
          </Avatar>
          <h1><b>Edit Product</b></h1>
        </Grid>
          <Formik initialValues={initialValues} onSubmit={handleSubmit} >
            <Form>
              <Field as={TextField} label='id' value={productId} placeholder='Enter product ID' style={textFieldStyle} fullWidth required helperText={<ErrorMessage name="id"/>}/>
              <Field as={TextField} label='maker' placeholder='Enter product ' style={textFieldStyle} fullWidth required helperText={<ErrorMessage name="maker"/>}/>
              <Field as={TextField} label='model' placeholder='Enter product model' style={textFieldStyle} fullWidth required helperText={<ErrorMessage name="model"/>}/>
              <Field as={TextField} label='product_name' placeholder='Enter product name' style={textFieldStyle} fullWidth required helperText={<ErrorMessage name="product_name"/>}/>        
              <Field as={TextField} label='product_price' placeholder='Enter price' style={textFieldStyle} fullWidth required helperText={<ErrorMessage name="product_price"/>}/>
              <Field as={TextField} label='inventory' placeholder='Enter how many to list' style={textFieldStyle} type="number" fullWidth required helperText={<ErrorMessage name="inventory"/>}/>
              <Field as={TextField} label='product_description' placeholder='Enter short description' style={textFieldStyle} fullWidth required helperText={<ErrorMessage name="product_description"/>}/>
              <Field as={TextField} label='image' placeholder='Enter image url' style={textFieldStyle} fullWidth required helperText={<ErrorMessage name="image"/>}/>        
              <Box textAlign="center">
                <Button type='submit' style={buttonStyle} fullWidth>
                    <PostAdd sx={postAddStyle}/>&nbsp;<p style={{color: "white", fontSize: '20px'}}><b>Edit</b></p>
                </Button>          
              </Box>
            </Form>
          </Formik>

      </Paper>
    </Grid>
  );
}

export default EditProduct;