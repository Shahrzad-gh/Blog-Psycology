import React from "react";
import { useGetPostByIdQuery } from "../../redux/postsApi";
import { useLocation } from "react-router-dom";

function SinglePost() {
  //const location = useLocation();
  // const { id } = location.state;
  const id = "618a365279e1eae6359c7d16";
  const {
    data,
    // error, isLoading
  } = useGetPostByIdQuery(id);

  console.log("single", data);
  console.log("single", id);

  return (
    <div className="singlePost">
      {data && (
        <div className="singlePostWrapper">
          <img
            src="https://image.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
            alt="عکس مقاله"
            title="عنوان مقاله"
          />
          <h1 className="SinglePostTitle">
            {data.title}
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              نویسنده: <b>{data.author}</b>
            </span>
            <span className="singlePostDate">{data.createdAt}</span>
          </div>
          <p
            className="singlePosDescription"
            dangerouslySetInnerHTML={{ __html: data.desc }}
          />
          <div className="postTags">
            <p className="postTagItem">جسم</p>
            <p className="postTagItem">روانشناسی</p>
            <p className="postTagItem">آرامش</p>
          </div>
          <div className="aboutAuthor">
            <img
              className="authorImg"
              src="https://image.freepik.com/free-photo/modern-woman-taking-selfie_23-2147893976.jpg"
              alt="نویسنده"
              title="نویسنده"
            />
            <p>
              تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
              با هدف بهبود
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SinglePost;
