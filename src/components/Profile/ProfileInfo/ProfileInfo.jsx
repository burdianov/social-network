import React, {useState} from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader/>;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <>
      <div className={styles.descriptionBlock}>
        <img
          alt="avatar"
          className={styles.avatar}
          src={profile.photos.large || userPhoto}
        />
        {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}

        {editMode ?
          <ProfileDataForm initialValues={profile}
                           profile={profile}
                           onSubmit={onSubmit}/> :
          <ProfileData profile={profile} isOwner={isOwner}
                       activateEditMode={() => {
                         setEditMode(true)
                       }}/>}

        <ProfileStatusWithHooks
          status={status}
          updateStatus={updateStatus}
        />
      </div>
    </>
  );
};

const ProfileData = ({profile, isOwner, activateEditMode}) => {
  return (
    <div>
      {isOwner &&
      <div>
        <button onClick={activateEditMode}>Edit</button>
      </div>
      }
      <div>
        <b>Full name:</b>: {profile.fullName}
      </div>
      <div>
        <b>Looking for
          job</b>: {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob &&
      <div>
        <b>My professional
          skills</b>: {profile.lookingForAJobDescription}
      </div>
      }
      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key}
                        contactValue={profile.contacts[key]}/>
      })}
      </div>
    </div>
  )
};

const Contact = ({contactTitle, contactValue}) => {
  return (
    <div className={styles.contact}><b>{contactTitle}</b>: {contactValue}
    </div>
  )
};

export default ProfileInfo;
