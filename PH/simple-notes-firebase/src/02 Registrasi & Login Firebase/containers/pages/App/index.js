// import logo from '../../../assets/img/logo/logo.svg'
import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from '../Dashboard'
import Register from '../Register'
import Login from '../Login'


function App() {
  return (
    <Router>
      <Fragment>
        {/* <div>
          <Link to="/">Dashboard</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div> */}
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Fragment>
    </Router>

  );
}

export default App;
