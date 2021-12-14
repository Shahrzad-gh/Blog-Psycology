import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-titles">
        <span className="not-found-titleLg">404</span>

        <span className="not-found-titleSm">
          به نظر می‌رسد که شما در بین صفحات گم شده اید، ما به شما کمک می کنیم تا
          از اینجا به بیرون بروید.
        </span>
      </div>
      <Link to="/">
        <button className="go-home">بازگشت به صفحه اصلی</button>
      </Link>
      <img className="not-found-img" src="" alt="" title="" />
    </div>
  );
}

export default NotFound;
