import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>;
    }

    return (
        <>
            <div className={styles.descriptionBlock}>
                <img
                    alt="avatar"
                    className={styles.avatar}
                    src={profile.photos.large || userPhoto}
                />
                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}
                />
            </div>
        </>
    );
};

export default ProfileInfo;
