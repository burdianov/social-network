import React, { useState } from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <>
      {/* <div>
        <img
          className={styles.profileImg}
          src="https://i2.wp.com/content.phuket101.net/wp-content/uploads/20181015165943/phuket-best-beaches.jpg?resize=1200%2C630&ssl=1"
          alt=""
        />
      </div> */}
      <div className={styles.descriptionBlock}>
        <img
          className={styles.avatar}
          src={props.profile.photos.large || userPhoto}
        />
        <ProfileStatus status={"Hai noroc"} />
      </div>
    </>
  );
};

export default ProfileInfo;
