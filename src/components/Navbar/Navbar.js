import React from "react";
import "./Navbar.css";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="navbar">
        <ul>
          <li>خانه</li>
          <li>مقاله</li>
          <li>درباره ما</li>
          <li>تماس با ما</li>
        </ul>
      </div>
      <div className="links">
        <SignInLinks />
        <SignOutLinks />
      </div>
    </div>
  );
}
