import React from 'react';
import "./Navbar.css"
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
  <>
  <link to="/">
    <h3>OIT</h3>
  </link>

  <div className='categories'> 
  <NavLink to="/category/celular" className={({ isActive }) => isActive ? "ActiveOption" : "Option"}/>
  <NavLink to="/category/tablets" className={({ isActive }) => isActive ? "ActiveOption" : "Option"}/>
  <NavLink to="/category/compus" className={({ isActive }) => isActive ? "ActiveOption" : "Option"}/>
  </div>
  <CartWidget/>
  </>
    
    
    
  );
}

export default Navbar;
