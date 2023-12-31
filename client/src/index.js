import React from 'react';
import "./index.css"
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './components/App';
import reportWebVitals from './reportWebVitals';
// import 'semantic-ui-css/semantic.min.css'
import { ErrorProvider } from './context/ErrorContext';
import { SuccessProvider } from './context/SuccessContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // turn strictmode into ErrorProvider
  <SuccessProvider>
  <ErrorProvider>
    <Router>
      <App />
    </Router>
  </ErrorProvider>
  </SuccessProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();