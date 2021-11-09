import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Header/Header";
import Posts from "../Posts/Posts";
import Sidebar from "../Sidebar/Sidebar";
import { getPost } from "../../redux/postSlice";
import "./Home.css";

function Home() {
  const post = useSelector((state) => state.post.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());
  }, []);

  console.log(post);
  return (
    <>
      <Header />
      <div className="home">
        <Posts data={post} />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
