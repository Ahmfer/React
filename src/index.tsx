import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importera huvudkomponenten App

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Rendera appen till root-elementet
);