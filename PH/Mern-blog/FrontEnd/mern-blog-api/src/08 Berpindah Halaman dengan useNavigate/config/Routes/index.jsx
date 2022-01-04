import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
// import Home from '../../pages/Home'
import { MainApp } from '../../pages'
import CreateBlog from '../../pages/CreateBlog'
import DetailBlog from '../../pages/DetailBlog'

const Index = () => {
    return (
        <Router>
            <Routes>
                <Route path='login' element={<Login />}></Route>
                <Route path='register' element={<Register />}></Route>
                <Route path='/' element={<MainApp />}>
                    <Route path='create-blog' element={<CreateBlog />} />
                    <Route path=':detail-blog' element={<DetailBlog />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default Index
