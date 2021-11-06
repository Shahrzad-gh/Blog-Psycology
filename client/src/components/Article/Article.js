import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import SinglePost from "./SinglePost";
import "./Article.css";

function Article() {
  return (
    <div className="article">
      <SinglePost />
      <Sidebar />
    </div>
  );
}

export default Article;
