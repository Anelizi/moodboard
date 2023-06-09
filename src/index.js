import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResetStyle from './style/ResetStyle';
import GlobalStyle from './style/GlobalStyle';
import AuthProvider from './contexts/AuthContect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetStyle/>
    <GlobalStyle/>
    <AuthProvider>
    <App/>
    </AuthProvider>
  </React.StrictMode>
);
