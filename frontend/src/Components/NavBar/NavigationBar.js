import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'
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
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

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
            {user ? (<></>) : (
                <>
                <NavLink to='/dashboard'>
                    Dashboard
                </NavLink>
                <NavLink to='/createRecipe'>
                    Create Recipe
                </NavLink>
                </>
            )}
            
            
        </NavMenu>
        {user ? (
            <NavBtn onClick={onLogout}>
                <NavBtnLink to='/'>LogOut</NavBtnLink>
        </NavBtn>
        ):(
        <>
        <NavBtn>
            <NavBtnLink to='/Login'>Login</NavBtnLink>
        </NavBtn>
        <NavBtn>
            <NavBtnLink to='/Register'>Register</NavBtnLink>
        </NavBtn>
        </>
        )}
        
    </Nav>
    </div>
    
  )
}

export default Navbar;