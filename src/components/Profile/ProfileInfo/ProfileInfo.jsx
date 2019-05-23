import React from "react";
import cls from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <React.Fragment>
      <div>
        <img
          className={cls.profileImg}
          src="https://i2.wp.com/content.phuket101.net/wp-content/uploads/20181015165943/phuket-best-beaches.jpg?resize=1200%2C630&ssl=1"
          alt=""
        />
      </div>
      <div className={cls.descriptionBlock}>
        <img src={props.profile.photos.large} />
      </div>
    </React.Fragment>
  );
};

export default ProfileInfo;
