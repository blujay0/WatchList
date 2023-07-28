import React, { useState, useContext, useEffect } from 'react';
import './SignUp.css';
import { Grid, Paper, Avatar, TextField, Button, Box, IconButton, Divider } from '@mui/material';
import { LockPerson, Fingerprint, Person } from '@mui/icons-material';
import { Link, useHistory } from 'react-router-dom';
import { ThemeContext } from './App.js'
import { useTheme } from './ThemeProvider'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ErrorContext } from '../context/ErrorContext';
import { SuccessContext } from '../context/SuccessContext';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  // destructure error context here
  const { error, setError } = useContext(ErrorContext)
  const { success, setSuccess } = useContext(SuccessContext);

  const darkTheme = useTheme();

  const themeStyles = {
    backgroundColor: darkTheme ? '#0C1728' : '#FFFFFF',
    color: darkTheme ? '#FFFFFF' : '#000000',
  }

  const sendEmail = (e) => {
    e.preventDefault();
    //emailjs.sendForm("service_id", "template_id", input, "user_id")
    emailjs.sendForm(
      "service_gymsax3", 
      "template_6vpott8", 
      e.target, 
      "NsTC9WPcTHXnR0JQ1"
      ).then(res => {
        console.log(res);
      }).catch( err=> console.log(err));
  }

  return (
    <div style={themeStyles}>
      <form style={{marginLeft: "100px"}} onSubmit={sendEmail}>
        <h1 style={{fontSize: "50px"}}>Contact Us</h1>
        <div>
          <label style={{fontSize: "25px"}}>Name: </label>
          <input type='text' name='user_name' style={{fontSize: "25px"}}/>        
        </div>
        <br />
        <div>
          <label style={{fontSize: "25px"}}>Email: </label>
          <input type='email' name='user_email' style={{fontSize: "25px"}}/>
        </div>
        <br />
        <div>
          <label style={{fontSize: "25px"}}>Message: </label>
          <br />
          <textarea name='user_message' rows='6' cols="50" style={{fontSize: "25px"}}/>
        </div>
        <input type='submit' value='Send' style={{backgroundColor: "#87CEEB", color: "black", padding: "8px 32px", margin: "4px 2px", fontSize: "20px"}}/>
      </form>
    </div>
  )
}

export default ContactUs