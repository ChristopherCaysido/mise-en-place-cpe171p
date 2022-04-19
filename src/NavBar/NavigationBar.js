import React from 'react'
import './navbar.css'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './navbarelement';
  

const Navbar = () => {
  return (
    <div className='nav-container'>
        <Nav>
        <NavLink to='/'>
            <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to='/about'>
                About
            </NavLink>
            <NavLink to='/dashboard'>
                Dashboard
            </NavLink>
            <NavLink to='/myrecipes'>
                My Recipes
            </NavLink>
            <NavLink to='/yes'>
                Create Recipe
            </NavLink>
            
        </NavMenu>
        <NavBtn>
            <NavBtnLink to='/Login'>Login</NavBtnLink>
        </NavBtn>
    </Nav>
    </div>
    
  )
}

export default Navbar;