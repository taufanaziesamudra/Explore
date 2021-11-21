import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { DataContext } from '../../context/DataContext'
import { NavbarStyled } from './NavbarStyled'
const Navbar = () => {
    const { dataContext } = useContext(DataContext)
    const totalCart = dataContext ? dataContext.carts.length : 0
    return (
        <NavbarStyled>
            <ul>
                <li>
                    <NavLink to='/home'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/products'>Products</NavLink>
                </li>
                <li>
                    <NavLink to='/cart'>Cart</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
            </ul>
        </NavbarStyled>
    )
}

export default Navbar
