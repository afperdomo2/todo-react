import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App despedida="Adios gente">
    <h1>Hola a todos.</h1>
  </App>
);
