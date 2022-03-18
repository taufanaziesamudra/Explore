import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import { DataContext } from './context/DataContext'
import Cart from './pages/cart/Cart'
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import About from './pages/about/About'

const Home2 = () => {
    const [dataContext, setDataContext] = useState(null)
    return (
        <DataContext.Provider value={{ dataContext, setDataContext }}>
            <Router>
                <Navbar>


                    <Route path="/home" element={<Home />} ></Route>
                    <Route path="/products" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/about" element={<About />} />
                </Navbar>
            </Router>
        </DataContext.Provider>

    )
}

export default Home2
