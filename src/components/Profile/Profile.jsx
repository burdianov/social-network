import React from "react";
import cls from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { addPost } from "./../../redux/state";

const Profile = props => {
  const { posts, newPostText } = props.profilePage;
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={posts}
        newPostText={newPostText}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
