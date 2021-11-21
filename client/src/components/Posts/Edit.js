import React from "react";
// import axios from "axios";
import Editpost from "./EditPost";
// import { useEditPostMutation } from "../../redux/postsApi";
import { useLocation } from "react-router";
// import { Link } from "react-router-dom";

const Edit = (props) => {
  const location = useLocation();
  // const id = location.pathname.split("/")[2];
  const { data } = location?.state || {};

  return (
    <div>
      {
        data && (
          <>
            <Editpost editPost={data} />
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
