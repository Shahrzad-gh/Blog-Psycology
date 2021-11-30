import React from "react";
import Editpost from "./EditPost";

const Edit = ({ role }) => {
  const data = localStorage.getItem("postData");
  const postData = JSON.parse(data);
  return (
    <div>
      {
        postData && (
          <>
            <Editpost editPost={postData} role={role} />
          </>
        )
        //   : (
        //   <Link to={{ pathname: `/post/${id}` }}>
        //     <p> مشاهده پست</p>
        //   </Link>
        // )
      }
    </div>
  );
};
export default Edit;
