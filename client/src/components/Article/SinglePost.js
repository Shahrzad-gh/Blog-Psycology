import React from "react";
import {
  useDeletePostMutation,
  useGetPostByIdQuery,
} from "../../redux/postsApi";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import moment from "moment";
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
                نویسنده: <b>{data.author}</b>
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
              <img
                className="authorImg"
                src="https://image.freepik.com/free-photo/modern-woman-taking-selfie_23-2147893976.jpg"
                alt="نویسنده"
                title="نویسنده"
              />
              <p>
                تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود لورم ایپسوم
                متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                طراحان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                کاربردهای متنوع با هدف بهبود
              </p>
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
