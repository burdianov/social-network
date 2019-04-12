import React from "react";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = props => {
  debugger;
  const state = props.store.getState();
  const { posts, newPostText } = state.profilePage;

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChange = text => {
    const action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={posts}
      newPostText={newPostText}
    />
  );
};

export default MyPostsContainer;
