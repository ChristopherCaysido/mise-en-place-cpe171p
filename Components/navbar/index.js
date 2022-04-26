import React from 'react'
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
    <Nav>
        <NavLink to='/'>
            <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to='/about'>
                About
            </NavLink>
            <NavLink to='/about'>
                Dashboard
            </NavLink>
            <NavLink to='/about'>
                My Recipes
            </NavLink>
            <NavLink to='/about'>
                Create Recipe
            </NavLink>
            
        </NavMenu>
        <NavBtn>
            <NavBtnLink to='/Login'>Login</NavBtnLink>
        </NavBtn>
    </Nav>
  )
}

export default Navbar