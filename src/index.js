import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/reset.css';
import './assets/css/media-queries.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'dotenv/config';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
