import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './02 Dynamic Comp Props/container/Home/Home';
// import Home from './03 Update Parent oleh Child/container/Home/Home';
import Home from './04 LifeCycle/container/Home/Home';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import HelloComponent from './01 StateLess & StateFull Comp/component/HelloComponent';

// const HelloWorld = () => {
//   return <p>Hello Wordl</p>
// }

// Functional Component atau StateLess Component
// const HelloComponent = () => {
//   return <P>Hello Component</P>
// }


// Class Component atau StateFull Component
// class StateFullCompnent extends React.Component {
//   render() {
//     return <p>StateFullCompnent</p>
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
