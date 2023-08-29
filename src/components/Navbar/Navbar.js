import React from 'react';
import "./Navbar.css"
import CartWidget from '../CartWidget/CartWidget';
//import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
  <>
  <Link to="/">
    OIT
  </Link>

  <div className='categories'> 
  <Link to="/category/celular" className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>categorias</Link>
  <Link to="/category/tablets" className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>categorias</Link>
  <Link to="/category/compus" className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>categorias</Link>
  </div>
  <CartWidget/>
  </>
    
    
    
  );
}

export default Navbar;
