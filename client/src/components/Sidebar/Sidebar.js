import React from "react";
import { useGetAllCatsQuery } from "../../redux/catsApi";
import { Link } from "react-router-dom";
function Sidebar({ siteInfo }) {
  const {
    data,
    // error, isLoading
  } = useGetAllCatsQuery();

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <div className="sidebarTitle">درباره ما</div>
        <img src={siteInfo.aboutPhoto} alt="پروفایل" />
        <p>{siteInfo.about}</p>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">موضوعات</div>
        <ul className="sidebarList">
          {data &&
            data.map((c) => (
              <Link
                key={c._id}
                to={{ pathname: `/`, search: `cat=${c.name}` }}
                className="link"
              >
                <li className="sidebarListItem">{c.name}</li>
              </Link>
            ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">ما را دنبال کنید</div>
        <div className="sidebarSocial">
          <a href={`https://instagram.com/${siteInfo.instagram}`}>
            <i className="sidebarIcon fab fa-instagram-square"></i>
          </a>
          <a href={`https://facebook.com/${siteInfo.facebook}`}>
            <i className="sidebarIcon fab fa-facebook-square"></i>
          </a>
          <a href={`https://twitter.com/${siteInfo.twitter}`}>
            <i className="sidebarIcon fab fa-twitter-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
