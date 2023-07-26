import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { ErrorContext } from '../context/errorContext';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const Error = () => {
  const { error, saveError } = useContext(ErrorContext);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (error) {

    }
  })
}

export default Error;