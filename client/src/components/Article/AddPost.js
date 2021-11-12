import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";
import "./AddPost.css";

function AddPost() {
  const user = "shery";

  const [userInfo, setuserInfo] = useState({
    title: "",
    author: user,
  });

  const handleOnChange = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  console.log(userInfo);

  let editorState = EditorState.createEmpty();
  const [description, setDescription] = useState(editorState);
  const onEditorStateChange = (editorState) => {
    setDescription(editorState);
  };

  console.log(description);

  const [isError, setError] = useState(null);

  const addDetails = async (event) => {
    console.log("addDetail");
    console.log(userInfo);

    try {
      event.preventDefault();
      event.persist();
      if (userInfo.description.value.length < 50) {
        setError("Required, Add description minimum length 50 characters");
        return;
      }
      await axios.post(`http://localhost:8080/api/post/add`, {
        title: userInfo.title,
        desc: userInfo.description.value,
        author: userInfo.author,
      });
    } catch (error) {
      throw error;
    }
  };
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
      <form className="addForm" onSubmit={addDetails}>
        <div className="addFormGroup">
          <input
            name="title"
            type="text"
            id="postTitle"
            placeholder="عنوان"
            autoFocus={true}
            onChange={handleOnChange}
          />
        </div>
        <div className="addFormGroup">
          <Editor
            editorState={description}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
          />
          <textarea
            style={{ display: "none" }}
            disabled
            ref={(val) => (userInfo.description = val)}
            value={draftToHtml(convertToRaw(description.getCurrentContent()))}
          />
        </div>
        <button className="submitButton">انتشار</button>
      </form>
    </div>
  );
}

export default AddPost;
