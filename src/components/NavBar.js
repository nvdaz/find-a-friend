import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
// import { AiOutlineClose } from 'react-icons/ai'
import Logout from "./Logout";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./NavBarStyles.css";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div name="home" className={nav ? "navbar navbar-bg" : "navbar"}>
      <div className="title">
        <h2>Profile</h2>
      </div>
      <ul className="nav-menu">
        <li>
          <Link to="/chat">Messages</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleNav}>
        <HiOutlineMenuAlt4 className="icon" />
      </div>
      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <li>
            <Link to="/chat">Messages</Link>
          </li>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <Logout />
          </div>
          <div className="social-icons">
            <a
              href="https://web.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
