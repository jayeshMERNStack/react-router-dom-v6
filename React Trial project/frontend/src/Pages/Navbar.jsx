import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <ul class="nav justify-content-center text-light">

  <li class="nav-item">
    <Link to="/" class="nav-link active" aria-current="page" >Navbar</Link>
  </li>
  <li class="nav-item">
    <Link to="/" class="nav-link active" aria-current="page" >Home</Link>
  </li>
  <li class="nav-item">
    <Link to="/contact" class="nav-link" >Contact</Link>
  </li>
  <li class="nav-item">
    <Link to="/about" class="nav-link">About</Link>
  </li> 
  <li class="nav-item">
    <Link to="/login" class="nav-link">Login</Link>
  </li> 
</ul>
    </div>
  )
}

export default Navbar;
