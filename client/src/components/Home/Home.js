import React from "react";
import Header from "../Header/Header";
import Posts from "../Posts/Posts";
import Sidebar from "../Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

import "./Home.css";

function Home({ data }) {
  const { search } = useLocation();
  // const { cat } = location ? location.state : null;
  return (
    <>
      <Header photo={data} />

      <div className="home">
        <Posts search={search} />
        <Sidebar siteInfo={data} />
      </div>
    </>
  );
}

export default Home;
