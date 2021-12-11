import React, { useState } from "react";
import "./Navbar.css";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";
import { Link } from "react-router-dom";

export default function Navbar({ user, username, photo }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileMenu = () => {
    setIsOpen(!isOpen);
    isOpen ? handleCloseMobileMenu() : handleOpenMobileMenu();
  };

  const handleOpenMobileMenu = () => {
    document.querySelector(".menu-icon").innerHTML =
      "<i class='fas fa-times'></i>";
    document.querySelector(".navbar").style.display = "block";
    document.querySelector(".mobile-links").style.display = "block";
  };

  const handleCloseMobileMenu = () => {
    document.querySelector(".navbar").style.display = "none";
    document.querySelector(".mobile-links").style.display = "none";
    document.querySelector(".menu-icon").innerHTML =
      "<i class='fas fa-bars'></i>";
  };

  return (
    <div className="nav">
      <a href={void 0} className="menu-icon" onClick={handleMobileMenu}>
        <i className="fa fa-bars"></i>
      </a>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">خانه</Link>
          </li>
          <li>
            <Link to="/about">درباره ما</Link>
          </li>
          <li>
            <Link to="/contact"> تماس با ما</Link>
          </li>
          <div className="mobile-links">
            <li>
              <Link to="/create">مقاله جدید</Link>
            </li>
            <li>
              <Link to="/signout"> خروج </Link>
            </li>
          </div>
        </ul>
      </div>
      <div className="links">
        {user ? (
          <SignInLinks username={username} photo={photo} />
        ) : (
          <SignOutLinks />
        )}
      </div>
    </div>
  );
}
