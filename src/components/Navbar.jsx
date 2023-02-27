import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import './styles/Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="NavbarContainer">
        <div className="NavbarLogo">bis-Atlas</div>
        <div className="NavbarLinks">
          <Link className="NavbarLink" to="/">Home</Link>
          <Link className="NavbarLink" to="/quiz">Quiz ></Link>
        </div>
        <button className="menu-button" onClick={toggleMenu}>
          &#9776;
        </button>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
