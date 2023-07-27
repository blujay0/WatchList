import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { SuccessContext } from '../context/SuccessContext';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const Success = () => {
  const { success, setSuccess } = useContext(SuccessContext);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (success) {
      setOpen(true);
      const timer = setTimeout(() => {
        setSuccess(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [success, setSuccess]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        {success}
      </Alert>
    </Snackbar>
  )
}

export default Success;