import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";
function Post({ post }) {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://img.freepik.com/free-vector/festival-light-happy-diwali-realistic-diya-design_1017-34302.jpg?size=338&ext=jpg&ga=GA1.2.107189515.1631794766"
        alt="عکس مقاله"
        title="مقاله"
      />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">جسم</span>&nbsp;
          <span className="postCategory">ذهن</span>&nbsp;
        </div>
        <Link to={{ pathname: `post/${post._id}`, state: { id: post._id } }}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <span className="postDate">یک ساعت پیش</span>
      </div>
      <p className="postDescription">{post.desc}</p>
    </div>
  );
}

export default Post;
