import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./css/header.css";


const Header = (props) => {
  const [open, setOpen] = useState(false);
  return (
    
      <nav className="navvbar">
        <div className="brand-title">
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/images/cer-logo.png`} alt="Logo" className="logo" />
          </Link>
        </div>
        <a className="toggle-btn" onClick={() => setOpen(!open)}>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>

        </a>

        
        <div className={`navbar-links ${open ? 'active' : ''}`}>
          <div className="toppy">
          <div className="topbar">
            <a href="#S">
              <span className="login">LOGIN</span> / REGISTER
            </a>
          </div>
          <hr className="nav-line" />
          <div className="vl"></div>
          </div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/go">NFL</NavLink>
            </li>
            <li>
              <NavLink to="/">NCAAF</NavLink>
            </li>
            <li>
              <NavLink to="/">News</NavLink>
            </li>
            <li>
              <NavLink to="/">Help</NavLink>
            </li>
            <li>
              <NavLink to="/">about</NavLink>
            </li>
            <li>
              <NavLink to="/" className={`${open ? 'search' : ''}`}>
                <i class="fas fa-search"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
   
  );
};

export default Header;
