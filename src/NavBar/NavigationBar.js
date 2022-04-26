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
            <img src={process.env.PUBLIC_URL+'/Imgs/NavbarLogo.svg'} alt='miseenplacelogo'></img>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to='/about'>
                About
            </NavLink>
            <NavLink to='/dashboard'>
                Dashboard
            </NavLink>
            <NavLink to='/createRecipe'>
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