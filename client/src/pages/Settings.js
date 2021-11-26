import React, { useState } from "react";
import "./Settings.css";
import Sidebar from "../components/Sidebar/Sidebar";
import { useEditUserMutation } from "../redux/userApi";
import { useHistory } from "react-router-dom";
import { useEditBlogMutation } from "../redux/blogApi";
function Settings({ username, email, photo, description, role, siteInfo }) {
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

  const [site, setSite] = useState({
    instagram: siteInfo.instagram,
    facebook: siteInfo.facebook,
    twitter: siteInfo.twitter,
    about: siteInfo.about,
    id: siteInfo.id,
  });
  console.log(siteInfo);
  const handleOnChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnSiteChange = (e) => {
    setSite({ ...site, [e.target.name]: e.target.value });
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

  const [siteTrigger] = useEditBlogMutation();

  const handleSiteSettings = (e) => {
    e.preventDefault();

    siteTrigger({ site }).then((res) => {
      // history.push(`/settings`);
      // window.location.reload();
    });
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="updateAccount">به روز رسانی حساب کاربری</span>
          {/* {role === "admin" ? (
            <span className="deleteAccount">پاک کردن حساب کاربری</span>
          ) : null} */}
        </div>
        <div className="settingsForm">
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
            <div className="userSetting">
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
              <button
                type="submit"
                className="settingdSubmit"
                onClick={handleSubmit}
              >
                به روز رسانی
              </button>
            </div>
            <div>
              {role === "admin" ? (
                <div className="adminSetting">
                  <label style={{ marginBottom: " 5px" }} htmlFor="instagram">
                    اینستاگرام
                  </label>
                  <input
                    style={{ width: "30vw" }}
                    type="text"
                    id="instagram"
                    name="instagram"
                    value={site.instagram}
                    onChange={handleOnSiteChange}
                  />
                  <label htmlFor="instagram">فیسبوک</label>

                  <input
                    style={{ width: "30vw" }}
                    type="text"
                    id="facebook"
                    name="facebook"
                    value={site.facebook}
                    onChange={handleOnSiteChange}
                  />
                  <label htmlFor="instagram">توئیتر</label>

                  <input
                    style={{ width: "30vw" }}
                    type="text"
                    id="twitter"
                    name="twitter"
                    value={site.twitter}
                    onChange={handleOnSiteChange}
                  />

                  <label htmlFor="desc">درباره سایت</label>
                  <textarea
                    id="aboutSite"
                    maxLength="60"
                    name="aboutSite"
                    value={site.aboutSite}
                    onChange={handleOnSiteChange}
                  />
                  <button
                    type="submit"
                    className="siteSubmit"
                    onClick={handleSiteSettings}
                  >
                    به روز رسانی مشخصات سایت
                  </button>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
