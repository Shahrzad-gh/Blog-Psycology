import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./AddPost.css";
import { useAddPostMutation } from "../../redux/postsApi";
import { useHistory } from "react-router-dom";

function AddPost({ username }) {
  const user = username;
  const [picture, setPicture] = useState();
  const history = useHistory();
  const [url, setUrl] = useState("");
  const [userInfo, setuserInfo] = useState({
    title: "",
    author: user,
  });

  function handleUploadImage(e) {
    setPicture(e.target.files[0]);
    setUrl(URL.createObjectURL(e.target.files[0]));
  }

  const handleOnChange = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  let editorState = EditorState.createEmpty();
  const [description, setDescription] = useState(editorState);
  const [categories, setCategories] = useState([]);

  const onEditorStateChange = (editorState) => {
    setDescription(editorState);
  };
  const [
    trigger,
    //result
  ] = useAddPostMutation();

  const handleAddCat = (e) => {
    let newArray = [...categories, e.target.value];
    if (categories.includes(e.target.value)) {
      newArray = newArray.filter((c) => c !== e.target.value);
    }
    setCategories(newArray);
  };

  const addDetails = async (e) => {
    e.preventDefault();
    const postData = new FormData();
    postData.append("title", userInfo.title);
    postData.append("desc", userInfo.description.value);
    postData.append("author", userInfo.author);
    for (let cat of categories) {
      postData.append("categories", cat);
    }
    postData.append("photo", picture);
    for (let tag of tags) {
      postData.append("tags", tag);
    }
    trigger(postData)
      .then((res) => {
        if (res.error.data) {
          alert(res.error.data.message);
        } else if (res.data) {
          history.push(`/`);
          window.location.reload();
        } else history.push(`/create`);
      })
      .catch((err) => history.push(`/create`));
  };
  const [inputTag, setInptTag] = useState("");
  const [tags, setTags] = useState([]);
  const addTags = (e) => {
    setInptTag(e.target.value);
  };

  const handleAddTags = (e) => {
    e.preventDefault();
    setTags([...tags, inputTag]);
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
          onChange={handleUploadImage}
        />
        <label htmlFor="postImage">
          <i className="far fa-plus-square"></i>
          &nbsp; اضافه کردن عکس عنوان
        </label>
        {url ? (
          <img className="postImg" src={url} alt="عکس" title="مقاله" />
        ) : (
          <img
            className="postImg"
            src="https://res.cloudinary.com/dw8wf8gps/image/upload/v1637507302/default-text-effect_67638-192_sgvqyk.jpg"
            alt="عکس"
            title="مقاله"
          />
        )}
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
          <div className="cat">
            <label className="selectCat">انتخاب موضوع:</label>
            <div className="categories-item">
              <input
                type="checkbox"
                id="body"
                name="body"
                value="جسم"
                onChange={handleAddCat}
              />
              <label htmlFor="body">جسم</label>
              <input
                type="checkbox"
                id="mind"
                name="mind"
                value="ذهن"
                onChange={handleAddCat}
              />
              <label htmlFor="mind">ذهن</label>
              <input
                type="checkbox"
                id="self"
                name="self"
                value="خویشتن"
                onChange={handleAddCat}
              />
              <label htmlFor="self">خویشتن</label>
            </div>
          </div>
          <div className="tag">
            <label htmlFor="tags">افزودن برچسب</label>
            <input
              className="tags"
              id="tags"
              type="text"
              placeholder="برچسب"
              onChange={addTags}
            />
            <button onClick={handleAddTags} className="addtag">
              افزودن
            </button>
          </div>
          <div className="showtag">
            {tags?.map((t) => (
              <label className="tag-style">{t}</label>
            ))}
          </div>
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
