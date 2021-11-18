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
  // const location = useLocation();
  console.log(props);

  const [userInfo, setuserInfo] = useState({
    title: props.editPost.title,
  });

  const handleOnChange = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  let editorState = EditorState.createWithContent(
    ContentState.createFromBlockArray(convertFromHTML(props.editPost.desc))
  );
  const [description, setDescription] = useState(editorState);
  const [categories, setCategories] = useState([]);

  const onEditorStateChange = (editorState) => {
    setDescription(editorState);
  };
  const [trigger, result] = useEditPostMutation();

  const handleUpdateCat = (e) => {
    setCategories([...categories, e.target.value]);
  };

  // const [
  //   isError,
  //   setError,
  // ] = useState(null);

  const updatePost = async (e) => {
    e.preventDefault();

    trigger({
      id: props.editPost._id,
      title: userInfo.title,
      desc: userInfo.description.value,
      author: userInfo.author,
      categories: categories,
    });
    // console.log(result);
    // location.state = result;
    history.push({
      pathname: `post/${props.editPost._id}`,
      state: { data: result.data },
    });
  };
  // console.log(result);

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
