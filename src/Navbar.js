import React, { useState } from 'react';
import './Navbar.css'; 

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ];

  return (
    <nav className="navbar">
      <ul className={`nav-links ${isDropdownOpen ? 'active' : ''}`}>
        <li className="dropdown">
          <a href="#">HOME</a>
        </li>
        <li className="dropdown">
          <a href="#">ABOUT</a>
        </li>
        <li className="dropdown" onClick={toggleDropdown}>
          <a href="#">OUR PRODUCT</a>
          <ul className="dropdown-content">
            {categories.map((subCategory, subIndex) => (
              <li key={subIndex}>
                <a href={`/${subCategory}`} onClick={closeDropdown}>
                  {subCategory}
                </a>
              </li>
            ))}
          </ul>
        </li>
        <li className="dropdown">
          <a href="#">CONTACT US</a>
        </li>
      </ul>
      {/* <div className="menu-icon" onClick={toggleDropdown}>
        <i className={`fas ${isDropdownOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div> */}
    </nav>
  );
};

export default Navbar;
