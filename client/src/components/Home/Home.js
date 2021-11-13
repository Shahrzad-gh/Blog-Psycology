import React from "react";
import Header from "../Header/Header";
import Posts from "../Posts/Posts";
import Sidebar from "../Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

import "./Home.css";

function Home() {
  const { search } = useLocation();
  console.log(search);
  // const { cat } = location ? location.state : null;
  return (
    <>
      <Header />

      <div className="home">
        <Posts search={search} />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
