import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/authSlice";
import "./SignIn.css";
import { Redirect } from "react-router-dom";
import { userSelector } from "../../redux/authSlice";

function SignIn() {
  const dispatch = useDispatch();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);
  console.log(useSelector(userSelector));
  const handleOnChange = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };
  console.log(loginInfo);

  const handleSignin = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginInfo));
  };

  return (
    <div className="signin">
      {isSuccess ? (
        <Redirect to="/" />
      ) : (
        <form className="signinForm" onSubmit={handleSignin}>
          <h1>ورود</h1>
          <input
            type="email"
            id="email"
            placeholder="ایمیل"
            name="email"
            onChange={handleOnChange}
          />
          {isError ? <p>{errorMessage.email}</p> : null}
          <input
            type="password"
            id="password"
            placeholder="رمز ورود"
            name="password"
            onChange={handleOnChange}
          />
          {isError ? <p>{errorMessage.password}</p> : null}
          <button type="submit" className="signinButton">
            ورود
          </button>
        </form>
      )}

      {isFetching ? <p>Loading</p> : null}
    </div>
  );
}

export default SignIn;
