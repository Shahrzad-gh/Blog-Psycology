//import axios from 'axios';
import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

const AuthContext = createContext("");

function AuthContextProvider(props) {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [user, setUser] = useState("user");

  const URL = "http://localhost:8080/api/auth";
  async function getLoggedIn() {
    try {
      const loggedInRes = await axios.get(`${URL}/loggedIn`);
      console.log(loggedInRes);
      setisLoggedIn(loggedInRes.data);

      // const userRes = await axios.get(`${URL}/getuser`);
      // setUser(userRes.data);
      // console.log("isLoggedIn", isLoggedIn);
      // console.log("user", user);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getLoggedIn();
  });

  return (
    <AuthContext.Provider value={{ isLoggedIn, getLoggedIn, user }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
