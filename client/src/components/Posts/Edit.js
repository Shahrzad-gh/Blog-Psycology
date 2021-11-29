import React from "react";
// import axios from "axios";
import Editpost from "./EditPost";
// import { useEditPostMutation } from "../../redux/postsApi";
import { useLocation } from "react-router";
// import { Link } from "react-router-dom";

const Edit = ({ role }) => {
  const location = useLocation();
  // const id = location.pathname.split("/")[2];
  const { postData } = location?.state || {};

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
