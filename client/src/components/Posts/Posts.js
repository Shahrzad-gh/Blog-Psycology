import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import { useGetAllPostsQuery } from "../../redux/postsApi";

function Posts({ search }) {
  // const {
  // items: posts,
  //   status,
  // } = useSelector((state) => state.posts);

  const {
    data,
    // error, isLoading
  } = useGetAllPostsQuery(search);

  return (
    <div className="posts">
      {data?.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
