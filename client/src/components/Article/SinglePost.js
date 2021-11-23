import React from "react";
import { useDeletePostMutation } from "../../redux/postsApi";
import { Link } from "react-router-dom";
import moment from "moment";
import { useGetUserByUsernameQuery } from "../../redux/userApi";
function SinglePost({ username, data, id }) {
  console.log(data);
  const [
    trriger,
    // , result
  ] = useDeletePostMutation();

  const user = useGetUserByUsernameQuery(data.author);
  console.log(useGetUserByUsernameQuery(data.author));
  console.log(user?.data);
  const userData = null;
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
