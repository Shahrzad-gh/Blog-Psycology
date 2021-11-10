import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import { useGetAllPostsQuery } from "../../redux/postsApi";

function Posts() {
  const {
    // items: posts,
    status,
  } = useSelector((state) => state.posts);

  const {
    data,
    // error, isLoading
  } = useGetAllPostsQuery();

  return (
    <div className="posts">
      {status === "success" ? (
        <>{data && data?.map((post) => <Post key={post._id} post={post} />)}</>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </div>
  );
}

export default Posts;
