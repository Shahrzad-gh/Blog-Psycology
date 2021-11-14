import React, { useState, useEffect } from "react";
import axios from "axios";
import Editpost from "./EditPost";
import { useEditPostMutation } from "../../redux/postsApi";
import { useLocation } from "react-router";

const Edit = () => {
  const location = useLocation();
  console.log(location);
  const { id } = location.state;
  return (
    <div>
      {id ? (
        <>
          <Editpost editPostID={id} />
        </>
      ) : null}
    </div>
  );
};
export default Edit;
