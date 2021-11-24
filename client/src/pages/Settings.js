import React, { useState } from "react";
import "./Settings.css";
import Sidebar from "../components/Sidebar/Sidebar";
import { useEditUserMutation } from "../redux/userApi";
import { useHistory } from "react-router-dom";

function Settings({ username, email, photo, description }) {
  const [picture, setPicture] = useState();
  const [url, setUrl] = useState("");
  const history = useHistory();

  function handleUploadImage(e) {
    setPicture(e.target.files[0]);
    setUrl(URL.createObjectURL(e.target.files[0]));
  }
  const [userInfo, setUserInfo] = useState({
    email: email,
    username: username,
    password: "",
    description: description,
  });

  const handleOnChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const [trigger] = useEditUserMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = new FormData();
    userData.append("username", userInfo.username);
    userData.append("email", userInfo.email);
    userData.append("author", userInfo.password);
    userData.append("description", userInfo.description);
    userData.append("photo", picture);
    trigger({ username, userData }).then(() => {
      history.push(`/settings`);
      window.location.reload();
    });
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="updateAccount">به روز رسانی حساب کاربری</span>
          {/* <span className="deleteAccount">پاک کردن حساب کاربری</span> */}
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <div className="settingsProfilePicture">
            {picture ? (
              <img
                className="profilePicture"
                src={url}
                alt="عکس پروفایل"
                title="پروفایل"
              />
            ) : photo.img ? (
              <img
                className="profilePicture"
                src={photo?.img}
                alt="عکس پروفایل"
                title="پروفایل"
              />
            ) : (
              <img
                className="profilePicture"
                src="https://res.cloudinary.com/dw8wf8gps/image/upload/v1637507302/default-text-effect_67638-192_sgvqyk.jpg"
                alt="عکس پروفایل"
                title="پروفایل"
              />
            )}
            <label className="settingPPIcon" htmlFor="fileInput">
              <i className="fas fa-camera fa-lg"></i>
            </label>
            <input
              className="inputImg"
              type="file"
              accept="image/*"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleUploadImage}
            />
          </div>
          <div className="form-settings">
            <div>
              <label htmlFor="username">نام کاربری</label>
              <input
                type="text"
                id="username"
                maxLength="10"
                minLength="3"
                name="username"
                value={userInfo.username}
                onChange={handleOnChange}
              />
              <label htmlFor="email">ایمیل</label>
              <input
                type="email"
                id="email"
                value={userInfo.email}
                name="email"
                onChange={handleOnChange}
              />
              <label htmlFor="password">رمز عبور</label>
              <input
                type="password"
                id="pasword"
                maxLength="6"
                name="password"
                value={userInfo.password}
                onChange={handleOnChange}
              />
              <label htmlFor="desc">درباره من</label>
              <textarea
                id="desc"
                maxLength="60"
                name="description"
                value={userInfo.description}
                onChange={handleOnChange}
              />
              <button type="submit" className="settingdSubmit">
                به روز رسانی
              </button>
            </div>
            <div>
              {/* <label htmlFor="">شبکه های اجتماعی</label> */}
              <label htmlFor="instagram">اینستاگرام</label>
              <input
                style={{ width: "30vw" }}
                type="text"
                id="instagram"
                name="instagram"
                onChange={handleOnChange}
              />
              <label htmlFor="instagram">فیسبوک</label>

              <input
                style={{ width: "30vw" }}
                type="text"
                id="facebook"
                name="facebook"
                onChange={handleOnChange}
              />
              <label htmlFor="instagram">توئیتر</label>

              <input
                style={{ width: "30vw" }}
                type="text"
                id="twitter"
                name="twitter"
                onChange={handleOnChange}
              />

              <label htmlFor="desc">درباره سایت</label>
              <textarea
                id="about"
                maxLength="60"
                name="about"
                onChange={handleOnChange}
              />
            </div>
          </div>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
