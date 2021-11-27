import React from "react";

function Header({ photo }) {
  return (
    <div className="header">
      <div className="titles">
        <span className="titleSm">جسم، ذهن، خویشتن</span>
        <span className="titleLg">وبلاگ روانشناسی</span>
      </div>

      <img
        className="headerImg"
        src={photo.headerPhoto}
        alt="وبلاگ روانشناسی"
        title="روانشناسی"
      />
    </div>
  );
}

export default Header;
