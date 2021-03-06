import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import SinglePost from "./SinglePost";
import "./Article.css";
import { useLocation } from "react-router-dom";

import { useGetPostByIdQuery } from "../../redux/postsApi";
function Article({ username, description, photo, role, siteInfo }) {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const {
    data,
    // error, isLoading
  } = useGetPostByIdQuery(id);
  return (
    <div className="article">
      {data && (
        <SinglePost postData={data} role={role} id={id} username={username} />
      )}
      <Sidebar siteInfo={siteInfo} />
    </div>
  );
}

export default Article;
