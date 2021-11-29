import React from "react";
import { useDeletePostMutation } from "../../redux/postsApi";
import { Link } from "react-router-dom";
import moment from "moment";
import { useGetUserByUsernameQuery } from "../../redux/userApi";
function SinglePost({ username, id, role, postData }) {
  const [
    trriger,
    // , result
  ] = useDeletePostMutation();

  const user = useGetUserByUsernameQuery(postData.author);
  const handleDeletePost = () => {
    trriger(id);
  };

  const imgName = postData?.photo.img.split("/")[7];
  const img = postData?.photo.img.split("/").splice(0, 6);
  img.push("h_400,w_600");
  img.push(imgName);

  return (
    <div className="singlePost">
      {
        postData && (
          <div className="singlePostWrapper">
            <img
              src={decodeURIComponent(img.join("/"))}
              alt="عکس مقاله"
              title="عنوان مقاله"
            />
            <h1 className="SinglePostTitle">
              {postData.title}
              <div className="singlePostEdit">
                {postData.author === username || role === "admin" ? (
                  <>
                    <Link
                      to={{ pathname: `/edit`, state: { postData } }}
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
                  to={{ pathname: `/`, search: `user=${postData.author}` }}
                  className="link"
                >
                  <b>{postData.author}</b>
                </Link>
              </span>
              <span className="singlePostDate">
                ایجاد {moment(postData.createdAt).calendar()}
              </span>
              <span className="singlePostDate">
                به روز رسانی {moment(postData.updatedAt).calendar()}
              </span>
            </div>
            <p
              className="singlePosDescription"
              dangerouslySetInnerHTML={{ __html: postData.desc }}
            />
            <div className="postTags">
              <p className="postTagItem">جسم</p>
              <p className="postTagItem">روانشناسی</p>
              <p className="postTagItem">آرامش</p>
            </div>
            <div className="aboutAuthor">
              {user.data ? (
                <img
                  className="authorImg"
                  src={user.data.photo?.img}
                  alt="نویسنده"
                  title="نویسنده"
                />
              ) : (
                <img
                  className="authorImg"
                  src="https://res.cloudinary.com/dw8wf8gps/image/upload/v1637507302/default-text-effect_67638-192_sgvqyk.jpg"
                  alt="نویسنده"
                  title="نویسنده"
                />
              )}
              <p>{user.data?.description}</p>
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
