import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthState from './context/auth/authState';





ReactDOM.render(
  <AuthState>
    <App />
  </AuthState>,
  document.getElementById('root')
  );
