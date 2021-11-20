import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/authSlice";
function SignInLinks() {
  const dispatch = useDispatch();
  const handleSignout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
  };
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
        <Link to="/create">مقاله جدید</Link>
      </li>

      <li className="btn" onClick={handleSignout}>
        خروج
      </li>
    </ul>
  );
}

export default SignInLinks;
