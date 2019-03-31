import React from "react";
import cls from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { addPost } from "./../../redux/state";

const Profile = props => {
  const { posts } = props.state;
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} addPost={props.addPost} />
    </div>
  );
};

export default Profile;
