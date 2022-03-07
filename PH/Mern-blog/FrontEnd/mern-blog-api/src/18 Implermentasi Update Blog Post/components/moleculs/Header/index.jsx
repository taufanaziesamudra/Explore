import React from 'react'
import { useNavigate } from 'react-router'
import './Header.scss'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="header">
            <p className="logo-app">Blog</p>
            <p className="menu-item" onClick={() => navigate('/login')}>Logout</p>
        </div>
    )
}

export default Header
