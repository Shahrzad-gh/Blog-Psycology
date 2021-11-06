import React from "react";
import { Link } from "react-router-dom";

function SignInLinks() {
  return (
    <ul>
      <li>
        <img
          className="avatar"
          src="https://image.freepik.com/free-photo/modern-woman-taking-selfie_23-2147893976.jpg"
          alt="avatar"
          title="name family"
        />
      </li>
      <li className="btnAdd">
        <Link to="add">مقاله جدید</Link>
      </li>

      <li className="btn">خروج</li>
    </ul>
  );
}

export default SignInLinks;
