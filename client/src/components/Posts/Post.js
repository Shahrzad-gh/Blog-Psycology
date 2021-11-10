import React from "react";
import "./Post.css";

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
        <span className="postTitle">{post.title}</span>
        <span className="postDate">یک ساعت پیش</span>
      </div>
      <p className="postDescription">{post.desc}</p>
    </div>
  );
}

export default Post;
