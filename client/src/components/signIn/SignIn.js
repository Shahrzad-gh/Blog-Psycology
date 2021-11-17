import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, userSelector } from "../../redux/authSlice";
import "./SignIn.css";

function SignIn() {
  const dispatch = useDispatch();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);

  const handleOnChange = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };
  console.log(loginInfo);

  const handleSignin = (e) => {
    console.log(loginInfo);
    dispatch(loginUser(loginInfo));
  };

  return (
    <div className="signin">
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
    </div>
  );
}

export default SignIn;
