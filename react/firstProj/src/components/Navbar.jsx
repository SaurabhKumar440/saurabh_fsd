import React from 'react'

import "../components/css/Navbar.css";
const Navbar = () => {
  return (
   
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <a href="" className="LOGO">
              Flipkart{" "}
            </a>
          </li>
          <li>
            <a href="">Smartphones</a>
          </li>
          <li>
            <a href="">Watches</a>
          </li>
          <li>
            <a href="">Laptop & PC</a>
          </li>
          <li>
            <a href="">Fashion</a>
          </li>
        </ul>
        <div className="search-container">
          <input type="search" placeholder="Search..." />
          <button type="submit">Search</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar
