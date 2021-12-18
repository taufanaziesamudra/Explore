import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
// import Home from '../../pages/Home'
import { MainApp } from '../../pages'

const Index = () => {
    return (
        <Router>
            <Routes>
                <Route path='login' element={<Login />}></Route>
                <Route path='register' element={<Register />}></Route>
                <Route path='/' element={<MainApp />}></Route>
            </Routes>
        </Router>
    )
}

export default Index
