// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import dari react-dom/client
import { Provider } from 'react-redux';
import App from './App';
import store from './state/store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Membuat root dengan createRoot
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
