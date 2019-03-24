import React from "react";
import cls from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          className={cls.profileImg}
          src="https://i2.wp.com/content.phuket101.net/wp-content/uploads/20181015165943/phuket-best-beaches.jpg?resize=1200%2C630&ssl=1"
          alt=""
        />
      </div>
      <div>avatar + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
