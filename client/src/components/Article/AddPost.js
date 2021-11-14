import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./AddPost.css";
import { useAddPostMutation } from "../../redux/postsApi";

function AddPost() {
  const user = "Shery";

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
  const [categories, setCategories] = useState([]);

  const onEditorStateChange = (editorState) => {
    setDescription(editorState);
  };
  const [
    trigger,
    //result
  ] = useAddPostMutation();

  const handleAddCat = (e) => {
    setCategories([...categories, e.target.value]);
  };
  console.log(categories);
  const [
    //isError,
    setError,
  ] = useState(null);

  const addDetails = async () => {
    trigger({
      title: userInfo.title,
      desc: userInfo.description.value,
      author: userInfo.author,
      categories: categories,
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
        <label className="selectCat">انتخاب موضوع:</label>
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
