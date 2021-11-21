import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";
import moment from "moment";

function Post({ post }) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={post.photo?.img}
        alt="عکس مقاله"
        title="مقاله"
      />
      <div className="postInfo">
        <div className="postCategories">
          {post &&
            post.categories.map((c, index) => (
              <span className="postCategory" key={index}>
                {c}&nbsp;
              </span>
            ))}
        </div>
        <Link to={{ pathname: `post/${post._id}`, state: { id: post._id } }}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <div className="date">
          <span className="postDate">
            ایجاد{moment(post.createdAt).calendar()}
          </span>
          <span className="postDate">
            به روز رسانی{moment(post.updatedAt).calendar()}
          </span>
        </div>
      </div>
      <div
        className="postDescription"
        dangerouslySetInnerHTML={{ __html: post.desc }}
      />
    </div>
  );
}

export default Post;
