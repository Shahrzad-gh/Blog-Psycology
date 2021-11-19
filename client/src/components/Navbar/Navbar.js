import React from "react";
import "./Navbar.css";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  console.group(props);
  const user = false;
  return (
    <div className="nav">
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">خانه</Link>
          </li>
          <li>درباره ما</li>
          <li>تماس با ما</li>
        </ul>
      </div>
      <div className="links">{user ? <SignInLinks /> : <SignOutLinks />}</div>
    </div>
  );
}
