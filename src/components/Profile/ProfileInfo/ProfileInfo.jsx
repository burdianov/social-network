import React from "react";
import cls from "./ProfileInfo.module.css";

const ProfileInfo = props => {
  return (
    <React.Fragment>
      <div>
        <img
          className={cls.profileImg}
          src="https://i2.wp.com/content.phuket101.net/wp-content/uploads/20181015165943/phuket-best-beaches.jpg?resize=1200%2C630&ssl=1"
          alt=""
        />
      </div>
      <div className={cls.descriptionBlock}>avatar + description</div>
    </React.Fragment>
  );
};

export default ProfileInfo;
