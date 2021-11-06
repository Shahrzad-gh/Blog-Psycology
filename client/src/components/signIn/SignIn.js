import React from "react";
import "./SignIn.css";

function SignIn() {
  return (
    <div className="signin">
      <form className="signinForm">
        <h1>ورود</h1>
        <input type="text" id="username" placeholder="نام کاربری" />
        <input type="password" id="password" placeholder="رمز ورود" />
        <button className="signinButton">ورود</button>
      </form>
    </div>
  );
}

export default SignIn;
