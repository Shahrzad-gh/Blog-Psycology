import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="titles">
        <span className="titleSm">جسم، ذهن، خویشتن</span>
        <span className="titleLg">وبلاگ روانشناسی</span>
      </div>

      <img
        className="headerImg"
        src="https://image.freepik.com/free-photo/diverse-people-supporting-group-session_53876-130270.jpg"
        alt="وبلاگ روانشناسی"
        title="روانشناسی"
      />
    </div>
  );
}

export default Header;
