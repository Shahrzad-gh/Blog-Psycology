import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <div className="sidebarTitle">درباره ما</div>
        <img
          src="https://image.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
          alt="پروفایل"
        />
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود
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
  );
}

export default Sidebar;
