import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { DataContext } from './context/DataContext'
import Cart from './pages/cart/Cart'
import Home from './pages/home/Home'
import Products from './pages/products/Products'

const Home2 = () => {
    const [dataContext, setDataContext] = useState(null)
    return (
        <DataContext.Provider value={{ dataContext, setDataContext }}>
            <Router>
                <Navbar>
                    <div className="App">
                        <Routes>
                            <Route path="/" exact component={Home} />
                            <Route path="/products" exact component={Products} />
                            <Route path="/cart" exact component={Cart} />
                        </Routes>
                        <Footer />
                    </div>
                </Navbar>
            </Router>

        </DataContext.Provider>

    )
}

export default Home2
