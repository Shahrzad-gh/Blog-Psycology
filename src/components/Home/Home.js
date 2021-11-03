import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="header">
        <div className="titles">
          <span className="titleSm">وبلاگ</span>
          <span className="titleLg">روانشناسی</span>
        </div>

        <img
          className="headerImg"
          src="https://image.freepik.com/free-photo/diverse-people-supporting-group-session_53876-130270.jpg"
          alt="وبلاگ روانشناسی"
          title="روانشناسی"
        />
      </div>
      <div class="main">
        <div className="posts">posts</div>

        <div className="sidebar">
          <div className="sidebarItem">
            <div className="sidebarTitle">درباره من</div>
            <img
              src="https://image.freepik.com/free-photo/modern-woman-taking-selfie_23-2147893976.jpg"
              alt="پروفایل"
            />
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود
            </p>
          </div>
          <div className="sidebarItem">
            <div className="sidebarTitle">موضوعات</div>
            <ul className="sidebarList">
              <li className="sidebarListItem">جسم</li>
              <li className="sidebarListItem">ذهن</li>
              <li className="sidebarListItem">خویشتن</li>
            </ul>
          </div>
          <div className="sidebarItem">
            <div className="sidebarTitle">ما را دنبال کنید</div>
            <div className="sidebarSocial">
              <i className="sidebarIcon fab fa-instagram-square"></i>
              <i className="sidebarIcon fab fa-facebook-square"></i>
              <i className="sidebarIcon fab fa-twitter-square"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
