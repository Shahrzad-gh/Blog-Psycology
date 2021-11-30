import React from "react";
import "./Contact.css";
import Sidebar from "../Sidebar/Sidebar";

function Contact({ siteInfo }) {
  const handleSendMessage = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contactPage">
      <div className="contact">
        <span className="contact-title">ارتباط با ما</span>
        <>
          <form className="contactform" onSubmit={handleSendMessage}>
            <input type="email" placeholder="لطفا ایمیل خود را وارد کنید" />
            <input type="text" placeholder="موضوع" />
            <textarea placeholder="متن پیام" />
            <button className="sendmessage" type="submit">
              ارسال
            </button>
          </form>
          {/* <img
            src="https://image.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
            alt="پروفایل"
          /> */}
        </>
      </div>
      <Sidebar siteInfo={siteInfo} />
    </div>
  );
}

export default Contact;
