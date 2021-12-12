import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'

const Navbar = () => {
    return (
        <div className="App">
            <Nav className="navbar navbar-expand bg-dark">
                <div className="container">
                    <ul className="nav">
                        <img src={logo} className="App-logo" alt="logo" style={{ height: "50px" }} />
                        <li>
                            <Link to="/" className="nav-link">Beranda</Link>
                        </li>
                        <li>
                            <Link to="/manajemen-buku" className="nav-link">Manajemen Buku</Link>
                        </li>
                    </ul>
                </div>
            </Nav>
        </div>
    )
}

export default Navbar
