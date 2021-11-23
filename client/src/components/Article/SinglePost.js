import React from "react";
import {
  useDeletePostMutation,
  useGetPostByIdQuery,
} from "../../redux/postsApi";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import moment from "moment";
import { useGetUserByUsernameQuery } from "../../redux/userApi";
function SinglePost({ username }) {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const {
    data,
    // error, isLoading
  } = useGetPostByIdQuery(id);

  const [
    trriger,
    // , result
  ] = useDeletePostMutation();
  const { userData } = useGetUserByUsernameQuery(data?.author);
  console.log(userData);

  const handleDeletePost = () => {
    trriger(id);
  };

  return (
    <div className="singlePost">
      {
        data && (
          <div className="singlePostWrapper">
            <img src={data.photo.img} alt="عکس مقاله" title="عنوان مقاله" />
            <h1 className="SinglePostTitle">
              {data.title}
              <div className="singlePostEdit">
                {data.author === username ? (
                  <>
                    <Link
                      to={{ pathname: `/edit`, state: { data } }}
                      className="singlePostIcon"
                    >
                      <i className=" far fa-edit"></i>
                    </Link>
                    <i
                      className="singlePostIcon far fa-trash-alt"
                      onClick={handleDeletePost}
                    ></i>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </h1>
            <div className="singlePostInfo">
              <span className="singlePostAuthor">
                نویسنده:
                <Link
                  to={{ pathname: `/`, search: `user=${data.author}` }}
                  className="link"
                >
                  <b>{data.author}</b>
                </Link>
              </span>
              <span className="singlePostDate">
                ایجاد {moment(data.createdAt).calendar()}
              </span>
              <span className="singlePostDate">
                به روز رسانی {moment(data.updatedAt).calendar()}
              </span>
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
              {userData?.photo ? (
                <img
                  className="authorImg"
                  src={userData.photo.img}
                  alt="نویسنده"
                  title="نویسنده"
                />
              ) : (
                <img
                  className="authorImg"
                  src="https://image.freepik.com/free-photo/modern-woman-taking-selfie_23-2147893976.jpg"
                  alt="نویسنده"
                  title="نویسنده"
                />
              )}
              <p>{userData?.description}</p>
            </div>
          </div>
        )
        //: (
        //     <p className="notFound">پست یافت نشد</p>
        // )
      }
    </div>
  );
}

export default SinglePost;
