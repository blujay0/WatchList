import React, { useState, useEffect, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Grid, Paper, Avatar, TextField, Button, Box, IconButton, Divider } from '@mui/material';
import { Notes, PostAdd } from '@mui/icons-material';
import { ThemeContext } from './App.js'
import { useTheme } from './ThemeProvider'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ErrorContext } from '../context/ErrorContext';
import { SuccessContext } from '../context/SuccessContext';

const EditProduct = ({ getProducts }) => {
  // const [id, setID] = useState();
  // const [maker, setMaker] = useState();
  // const [model, setModel] = useState();
  // const [productName, setProductName] = useState();
  // const [productPrice, setProductPrice] = useState();
  // const [inventory, setInventory] = useState();
  // const [productDescription, setProductDescription] = useState();
  // const [image, setImage] = useState();

  // destructure error context here
  const { error, setError } = useContext(ErrorContext)
  const { success, setSuccess } = useContext(SuccessContext)

  const [product, setProduct] = useState({
    maker:'',
    model:'',
    product_name:'',
    product_price:'',
    inventory:'',
    product_description:'',
    image:'',
  });

  const paperStyle = { backgroundColor: 'white', padding: 20, height:'60vh', width: 400, margin: '20px auto' };
  const buttonStyle = { margin: '8px 0', height:'5vh', borderRadius: '30px', backgroundColor: 'yellow', padding: 0 };
  const textFieldStyle = { backgroundColor: 'white', margin: '8px 0' };
  const avatarStyle = { height: '70px', width: '70px', bgcolor: '#273248', fontSize: 30 };
  const notesStyle = { fontSize: '2em', color: 'white' };
  const postAddStyle = { fontSize: '40px', color: 'black' };

  const darkTheme = useTheme()
  const themeStyles = {
    backgroundColor: darkTheme ? '#0C1728' : '#FFFFFF',
  }

  // useParams is used to grab from URL
  const { productId } = useParams();

  // const initialValues={
  //   maker:'',
  //   model:'',
  //   product_name:'',
  //   product_price:'',
  //   inventory:'',
  //   product_description:'',
  //   image:'',
  // }

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

// example format for EditProduct fetch if... else...
// fetch(`/products/${productId}`, {
//   method: "PATCH",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(formData)
// }).then((resp) => {
//   if (resp.ok) {
//     getProducts()
//   }
//   else {
//     resp.json().then(error => setError(error.error))
//   }
// })

  useEffect(() => {
    fetch(`/products/${productId}`)
    .then(resp => {
      resp.json().then(data => setProduct(data))
    })
  }, [])

  const handleSubmit = (values, props) => {
    const formData = {
      id: values.id,
      maker: values.maker,
      model: values.model,
      product_name: values.product_name,
      product_price: values.product_price,
      inventory: values.inventory,
      product_description: values.product_description,
      image: values.image,
    }

    fetch(`/products/${productId}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    }).then(resp => {
      if (resp.ok) {
        getProducts()
        setSuccess('Edit Successful!')
      } else {
        resp.json().then(error => {
          setError(error.error)
        })
      }
    })
    
  }
  return(
    <div style={themeStyles}>
      <Grid>
        <Paper elevation={0} style={paperStyle}>
          <Grid align='center'>
            <Avatar sx={avatarStyle}>
              <Notes sx={notesStyle} />
            </Avatar>
            <h1><b>Edit Product</b></h1>
          </Grid>
            {/* reinitialize detects if the initial values are changed, it will update the fields */}
            <Formik initialValues={product} enableReinitialize onSubmit={handleSubmit} validationSchema={validationSchema}>
              {(props)=>(
                // console.log(values.maker)
                <Form>
                  <Field as={TextField} label='id' value={productId} placeholder='Enter product ID' style={textFieldStyle} fullWidth required helperText={<ErrorMessage name="id"/>}/>
                  <Field as={TextField} label='maker' name='maker' style={textFieldStyle} fullWidth required helperText={<ErrorMessage name="maker"/>}/>
                  <Field as={TextField} label='model' name='model' placeholder='Enter product model' style={textFieldStyle} fullWidth required helperText={<ErrorMessage name="model"/>}/>
                  <Field as={TextField} label='product_name' name='product_name' placeholder='Enter product name' style={textFieldStyle} fullWidth required helperText={<ErrorMessage name="product_name"/>}/>        
                  <Field as={TextField} label='product_price' name='product_price' type="number" InputProps={{inputProps: {max: 1000000, min: 0}}} placeholder='Enter price' style={textFieldStyle} fullWidth required helperText={<ErrorMessage name="product_price"/>}/>
                  <Field as={TextField} label='inventory' name='inventory' type="number" InputProps={{inputProps: {max: 1000000, min: 0}}} placeholder='Enter how many to list' style={textFieldStyle} fullWidth required helperText={<ErrorMessage name="inventory"/>}/>
                  <Field as={TextField} label='product_description' name='product_description' placeholder='Enter short description' style={textFieldStyle} fullWidth required helperText={<ErrorMessage name="product_description"/>}/>
                  <Field as={TextField} label='image' name='image' placeholder='Enter image url' style={textFieldStyle} fullWidth required helperText={<ErrorMessage name="image"/>}/>        
                  <Box textAlign="center">
                    <Button type='submit' style={buttonStyle} fullWidth>
                        <PostAdd sx={postAddStyle}/>&nbsp;<p style={{color: "black", fontSize: '20px'}}><b>Edit</b></p>
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

export default EditProduct;