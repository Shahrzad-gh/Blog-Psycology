import React, { useState } from "react";
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import { useHistory } from "react-router-dom";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useEditPostMutation } from "../../redux/postsApi";

function Editpost(props) {
  const history = useHistory();
  const [picture, setPicture] = useState();

  const [userInfo, setuserInfo] = useState({
    title: props.editPost.title,
    author: props.editPost.author,
  });

  const handleOnChange = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  function handleUploadImage(e) {
    setPicture(e.target.files[0]);
  }

  let editorState = EditorState.createWithContent(
    ContentState.createFromBlockArray(convertFromHTML(props.editPost.desc))
  );
  const [description, setDescription] = useState(editorState);
  const [categories, setCategories] = useState([]);

  const onEditorStateChange = (editorState) => {
    setDescription(editorState);
  };
  const [trigger] = useEditPostMutation();

  const handleUpdateCat = (e) => {
    let newArray = [...categories, e.target.value];
    if (categories.includes(e.target.value)) {
      newArray = newArray.filter((c) => c !== e.target.value);
    }
    setCategories(newArray);
  };
  const updatePost = async (e) => {
    e.preventDefault();
    const id = props.editPost._id;
    const postData = new FormData();
    postData.append("title", userInfo.title);
    postData.append("desc", userInfo.description.value);
    postData.append("author", userInfo.author);
    for (let cat of categories) {
      postData.append("categories", cat);
    }
    postData.append("photo", picture);
    trigger({ id, postData }).then(() => {
      history.push(`/`);
      window.location.reload();
    });
  };
  return (
    <div className="addPost">
      <h1>ایجاد پست جدید</h1>
      <div className="postImage">
        <input
          type="file"
          id="postImage"
          accept="image/*"
          onChange={handleUploadImage}
        />
        <label htmlFor="postImage">
          <i className="far fa-plus-square"></i>
          &nbsp; اضافه کردن عکس عنوان
        </label>
        <img className="postImg" src={picture} alt="عکس" title="مقاله" />
      </div>
      <form className="addForm" onSubmit={updatePost}>
        <div className="addFormGroup">
          <input
            value={userInfo.title}
            name="title"
            type="text"
            id="postTitle"
            placeholder="عنوان"
            autoFocus={true}
            onChange={handleOnChange}
          />
        </div>
        <label className="selectCat">انتخاب موضوع:</label>
        <input
          type="checkbox"
          id="body"
          name="body"
          value="جسم"
          onChange={handleUpdateCat}
        />
        <label htmlFor="body">جسم</label>
        <input
          type="checkbox"
          id="mind"
          name="mind"
          value="ذهن"
          onChange={handleUpdateCat}
        />
        <label htmlFor="mind">ذهن</label>
        <input
          type="checkbox"
          id="self"
          name="self"
          value="خویشتن"
          onChange={handleUpdateCat}
        />
        <label htmlFor="self">خویشتن</label>

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
        <button className="submitButton">به روز رسانی</button>
      </form>
    </div>
  );
}
export default Editpost;
