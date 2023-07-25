import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Button, Box, IconButton, Divider } from '@mui/material';
import { Add, PlusOne } from '@mui/icons-material';
import { ThemeContext } from './App.js'
import { useTheme } from './ThemeProvider'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ListProduct = ( {getProducts} ) => {
  // const [maker, setMaker] = useState();
  // const [model, setModel] = useState();
  // const [productName, setProductName] = useState();
  // const [productPrice, setProductPrice] = useState();
  // const [inventory, setInventory] = useState();
  // const [productDescription, setProductDescription] = useState();
  // const [image, setImage] = useState();
  // const [productID, setProductID] = useState();

  const paperStyle = { backgroundColor: 'white', padding: 20, height:'60vh', width: 400, margin: '20px auto' };
  const buttonStyle = { margin: '8px 0', height:'5vh', borderRadius: '30px', backgroundColor: '#627C79', padding: 0 };
  const textFieldStyle = { backgroundColor: 'white', margin: '8px 0' };
  const avatarStyle = { height: '70px', width: '70px', bgcolor: '#273248', fontSize: 30 };
  const addStyle = { fontSize: '2em', color: 'white' };
  const plusOneStyle = { fontSize: '40px', color: 'white' };

  const darkTheme = useTheme()
  const themeStyles = {
    backgroundColor: darkTheme ? '#008B8B' : '#FFFFFF',
  }

  const initialValues = {
    image:'',
    inventory:'',
    maker:'',
    model:'',
    product_description:'',
    product_id:'',
    product_name:'',
    product_price:'',
  }

  const URL = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/ // can check this regex on regex101.com/r/O47zyn/4

  const validationSchema=Yup.object().shape({
    maker:Yup.string().min(3).max(20).required("Maker Required"),
    model:Yup.string().min(3).max(20).required('Model Required'),
    product_name:Yup.string().min(3).max(20).required('Product Name Required'),
    product_price:Yup.number().required('Listing Price of at least $50 Required').test('Is positive?', 'Your listing price must be at least $50', value => value >= 50),
    inventory:Yup.number().required('Inventory of at least 1 Required').test('Is positive?', 'You must have an inventory of at least 1', value => value > 0),
    product_description:Yup.string().min(25).max(150).required('Description Required'),
    image:Yup.string().matches(URL, 'please enter valid URL')
  })

  const handleSubmit = (values, props) => {
    const formData = {
      image: values.image,
      inventory: values.inventory,
      maker: values.maker,
      model: values.model,
      product_description: values.product_description,
      product_id: values.product_id,
      product_name: values.product_name,
      product_price: values.product_price,
    }

    // useEffect(() => {
    //   // fetch customer and set customer data to state
    //   fetch("/customer")
    //   .then(resp => {
    //     if (resp.ok) {
    //       resp.json().then((data) => {setCustomer(data)});
    //     }
    //   })
    //   .catch(err => setCustomer(null))
    // }, [])

    fetch(`/products`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then( resp => resp.json())
    .then(() => getProducts())
  }

  return(
    <div style={themeStyles}>
      <Grid>
        <Paper elevation={0} style={paperStyle}>
          <Grid align='center'>
            <Avatar sx={avatarStyle}>
              <PlusOne sx={plusOneStyle} />
            </Avatar>
            <h1><b>List Watch</b></h1>
          </Grid>
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
              {(props) => (
                <Form>
                  <Field as={TextField} label='maker' name='maker' placeholder='Enter product maker' style={textFieldStyle} fullWidth required helperText={<ErrorMessage name="maker"/>}/>
                  <Field as={TextField} label='model' name='model' placeholder='Enter product model' style={textFieldStyle} fullWidth required helperText={<ErrorMessage name="model"/>}/>
                  <Field as={TextField} label='product_name' name='product_name' placeholder='Enter product name' style={textFieldStyle} fullWidth required helperText={<ErrorMessage name="product_name"/>}/>        
                  <Field as={TextField} label='product_price' name='product_price' type="number" InputProps={{inputProps: {max: 1000000, min: 0}}} placeholder='Enter price' style={textFieldStyle} fullWidth required helperText={<ErrorMessage name="product_price"/>}/>
                  <Field as={TextField} label='inventory' name='inventory' type="number" InputProps={{inputProps: {max: 1000000, min: 0}}} placeholder='Enter how many to list' style={textFieldStyle} type="number" fullWidth required helperText={<ErrorMessage name="inventory"/>}/>
                  <Field as={TextField} label='product_description' name='product_description' placeholder='Enter short description' style={textFieldStyle} fullWidth required helperText={<ErrorMessage name="product_description"/>}/>
                  <Field as={TextField} label='image' name='image' placeholder='Enter image url' style={textFieldStyle} fullWidth required helperText={<ErrorMessage name="image"/>}/>        
                  <Box textAlign="center">
                    <Button type='submit' style={buttonStyle} fullWidth>
                        <Add sx={addStyle}/>&nbsp;<p style={{color: "white", fontSize: '20px'}}><b>List</b></p>
                    </Button>          
                  </Box>
                </Form>
              )}
          </Formik>
        </Paper>
      </Grid>
    </div>
  );
}

export default ListProduct;