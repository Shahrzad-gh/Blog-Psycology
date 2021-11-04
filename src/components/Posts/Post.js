import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://img.freepik.com/free-vector/festival-light-happy-diwali-realistic-diya-design_1017-34302.jpg?size=338&ext=jpg&ga=GA1.2.107189515.1631794766"
        alt="عکس مقاله"
        title="مقاله"
      />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">جسم</span>&nbsp;
          <span className="postCategory">ذهن</span>&nbsp;
        </div>
        <span className="postTitle">نامفهوم از صنعت چاپ و با استفاده</span>
        &nbsp;
        <hr />
        <span className="postDate">یک ساعت پیش</span>&nbsp;
      </div>
      <p className="postDescription">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
        چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
        مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
        نیاز و کاربردهای متنوع با هدف بهبود لورم ایپسوم متن ساختگی با تولید
        سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
        متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
        فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
      </p>
    </div>
  );
}

export default Post;
