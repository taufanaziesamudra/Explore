import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./01 Integrasi Firebase React JS/containers/pages/App";
import reportWebVitals from './reportWebVitals';
import firebaseConfig from './01 Integrasi Firebase React JS/config/firebase';

console.log("firebase", firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
