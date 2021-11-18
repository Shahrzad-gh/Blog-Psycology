import React, { useState, useEffect } from "react";
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

  console.log("selector", useSelector(userSelector));

  const handleOnChange = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };
  console.log(loginInfo);

  const handleSignin = (e) => {
    e.preventDefault();
    const isAuth = dispatch(loginUser(loginInfo));
    console.log("status", isAuth.status);
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
          <input
            type="password"
            id="password"
            placeholder="رمز ورود"
            name="password"
            onChange={handleOnChange}
          />
          <button type="submit" className="signinButton">
            ورود
          </button>
        </form>
      )}
      {isError ? <p>{errorMessage}</p> : null}
      {isFetching ? <p>Loading</p> : null}
    </div>
  );
}

export default SignIn;
