import React from "react";

function Header({ siteInfo }) {
  document.title = siteInfo.title;
  return (
    <div className="header">
      <div className="titles">
        <span className="titleLg">{siteInfo.name}</span>
        <span className="titleSm">{siteInfo.subTitle}</span>
      </div>

      <img
        className="headerImg"
        src={siteInfo?.headerPhoto}
        alt="وبلاگ روانشناسی"
        title="روانشناسی"
      />
    </div>
  );
}

export default Header;
