import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./AddPost.css";

function AddPost() {
  // let history = useHistory();
  // const [userInfo, setuserInfo] = useState({
  //   title: "",
  // });
  // const onChangeValue = (e) => {
  //   setuserInfo({
  //     ...userInfo,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // let editorState = EditorState.createEmpty();
  // const [description, setDescription] = useState(editorState);
  // const onEditorStateChange = (editorState) => {
  //   setDescription(editorState);
  // };

  // const [isError, setError] = useState(null);
  // const addDetails = async (event) => {
  //   try {
  //     event.preventDefault();
  //     event.persist();
  //     if (userInfo.description.value.length < 50) {
  //       setError("Required, Add description minimum length 50 characters");
  //       return;
  //     }
  //     axios
  //       .post(`http://localhost:8080/addArticle`, {
  //         title: userInfo.title,
  //         description: userInfo.description.value,
  //       })
  //       .then((res) => {
  //         if (res.data.success === true) {
  //           history.push("/");
  //         }
  //       });
  //   } catch (error) {
  //     throw error;
  //   }
  // };
  return (
    <div className="addPost">
      <h1>ایجاد پست جدید</h1>
      <div className="postImage">
        <input
          type="file"
          id="postImage"
          accept="image/*"
          style={{ display: "none" }}
        />
        <label htmlFor="postImage">
          <i className="far fa-plus-square"></i>
          &nbsp; اضافه کردن عکس عنوان
        </label>
        {/* <img
          className="postImg"
          src="https://image.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
          alt="عکس"
          title="مقاله"
        /> */}
      </div>
      <form className="addForm">
        <div className="addFormGroup">
          <input
            type="text"
            id="postTitle"
            placeholder="عنوان"
            autoFocus={true}
          />
        </div>
        <div className="addFormGroup">
          <Editor
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
          />
        </div>
        <button className="submitButton">انتشار</button>
      </form>
    </div>
  );
}

export default AddPost;
