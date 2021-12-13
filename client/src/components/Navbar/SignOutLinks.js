import React from "react";
import { Link } from "react-router-dom";

function SignOutLinks() {
  return (
    <ul>
      <li className="btn-signin">
        <Link to="signin">ورود</Link>
      </li>
    </ul>
  );
}

export default SignOutLinks;
