//import axios from 'axios';
import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [user, setUser] = useState("user");

  async function getLoggedIn() {
    try {
      const loggedInRes = await axios.get("/loggedIn");
      setisLoggedIn(loggedInRes.data);

      const userRes = await axios.get("/getuser");
      setUser(userRes.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, getLoggedIn, user }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
