import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import SinglePost from "./SinglePost";
import "./Article.css";

function Article({ username }) {
  return (
    <div className="article">
      <SinglePost username={username} />
      <Sidebar />
    </div>
  );
}

export default Article;
