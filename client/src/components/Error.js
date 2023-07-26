import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { ErrorContext } from '../context/ErrorContext';
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
      setOpen(true);
      // const timer = setTimeout(() => {
      //   saveError(null);
      // }, 3000);

      // return () => {
      //   clearTimeout(timer);
      // };
    }
  }, [error, saveError]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        {error}
      </Alert>
    </Snackbar>
  )
}

export default Error;