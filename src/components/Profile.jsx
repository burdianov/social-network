import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img
          src="https://i2.wp.com/content.phuket101.net/wp-content/uploads/20181015165943/phuket-best-beaches.jpg?resize=1200%2C630&ssl=1"
          alt=""
        />
      </div>
      <div>avatar + description</div>
      <div>
        my posts
        <div>New post</div>
        <div className={classes.post}>
          <div className={classes.item}>Post 1</div>
          <div className={classes.item}>Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
