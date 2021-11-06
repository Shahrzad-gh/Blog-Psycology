import React from "react";
import "./Settings.css";
import Sidebar from "../components/Sidebar/Sidebar";
function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="updateAccount">به روز رسانی حساب کاربری</span>
          <span className="deleteAccount">پاک کردن حساب کاربری</span>
        </div>
        <form className="settingsForm">
          <div className="settingsProfilePicture">
            <img
              className="profilePicture"
              src="https://image.freepik.com/free-photo/modern-woman-taking-selfie_23-2147893976.jpg"
              alt="عکس پروفایل"
              title="پروفایل"
            />
            <label className="settingPPIcon" htmlFor="fileInput">
              <i className="fas fa-camera fa-lg"></i>
            </label>
            <input
              className="inputImg"
              type="file"
              accept="image/*"
              id="fileInput"
            />
          </div>
          <label htmlFor="username">نام کاربری</label>
          <input type="text" id="username" maxLength="10" minLength="3" />
          <label htmlFor="email">ایمیل</label>
          <input type="email" id="email" />
          <label htmlFor="password">رمز عبور</label>
          <input type="password" id="pasword" maxLength="6" />
          <button className="settingdSubmit">به روز رسانی</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
