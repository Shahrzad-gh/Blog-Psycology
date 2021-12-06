import React from "react";
import "./Navbar.css";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";
import { Link } from "react-router-dom";

export default function Navbar({ user, username, photo }) {
  return (
    <div className="nav">
      <div className="navbar">
        <ul>
          <li className="menu-icon">
            <i className="fas fa-bars"></i>
          </li>
          <li>
            <Link to="/">خانه</Link>
          </li>
          <li>
            <Link to="/about">درباره ما</Link>
          </li>
          <li>
            <Link to="/contact"> تماس با ما</Link>
          </li>
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
