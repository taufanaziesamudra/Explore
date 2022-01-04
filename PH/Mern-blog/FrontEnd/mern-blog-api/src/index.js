import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './01 Atonomic Design/pages/App'
// import App from './02 Navigation Router/pages/App'
// import App from './03 Slicing Halaman Component dengan Hooks/pages/App'
// import App from './04 Halaman Berlapis dengan Nested Route/pages/App'
// import App from './05 Styling Header dan Footer/pages/App'
// import App from './06 Styling Blog Post & Pagination/pages/App'
// import App from './07 Styling Create & Detail Blog/pages/App'
import App from './08 Berpindah Halaman dengan useNavigate/pages/App'
import reportWebVitals from './reportWebVitals';

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
