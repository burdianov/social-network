import React from "react";
import cls from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = props => {
  const { posts, newPostText } = props.profilePage;
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={posts}
        newPostText={newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
