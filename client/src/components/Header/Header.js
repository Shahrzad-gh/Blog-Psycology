import React from "react";

function Header({ siteInfo }) {
  console.log(siteInfo);
  document.title = siteInfo.title;
  return (
    <div className="header">
      <div className="titles">
        <span className="titleSm">{siteInfo.name}</span>
        <span className="titleLg">{siteInfo.subTitle}</span>
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
