import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/authSlice";
function SignInLinks({ photo, username }) {
  const dispatch = useDispatch();
  const handleSignout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
  };
  return (
    <ul>
      <li>
        <Link to="/settings">
          {photo.img ? (
            <img
              className="avatar"
              src={photo.img}
              alt={username}
              title={username}
            />
          ) : (
            <img
              className="avatar"
              src="https://res.cloudinary.com/dw8wf8gps/image/upload/v1637507302/default-text-effect_67638-192_sgvqyk.jpg"
              alt={username}
              title={username}
            />
          )}
        </Link>
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
