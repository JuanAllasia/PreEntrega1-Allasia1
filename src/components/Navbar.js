import React from 'react';
import "./Navbar.css"
import CartWidget from './CartWidget/CartWidget';

const Navbar = () => {
  return (
    <>
    <nav class="navbar">
    <div class="navbar-container">
      <a class="logo" href="#">OIT</a>
      <ul class="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Categorías</a></li>
        <li><a href="#"><CartWidget/></a></li>
      </ul>
    </div>
  </nav>
    
    
    </>
  );
}

export default Navbar;
