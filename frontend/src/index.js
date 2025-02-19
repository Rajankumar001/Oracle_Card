import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import axios from 'axios';
import './index.css';
import App from './App';
axios.defaults.baseURL = "http://localhost:8080";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App />
</Provider>
);
