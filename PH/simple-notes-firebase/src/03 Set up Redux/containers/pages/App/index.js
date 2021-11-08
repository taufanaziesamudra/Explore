// import logo from '../../../assets/img/logo/logo.svg'
import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from '../Dashboard'
import Register from '../Register'
import Login from '../Login'
import { Provider } from 'react-redux'
import { store } from '../../../config/redux'



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </Fragment>
      </Router>
    </Provider>

  );
}

export default App;
