import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'

const Navbar = () => {
    return (
        <div className="App">
            <nav className="navbar navbar-expand bg-dark">
                <div className="container">
                    <ul className="nav">
                        <img src={logo} className="App-logo" alt="logo" style={{ height: "50px" }} />
                        <li>
                            <Link to="/" className="nav-link">Beranda</Link>
                        </li>
                        <li>
                            <Link to="/book-management" className="nav-link">Book Management</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
