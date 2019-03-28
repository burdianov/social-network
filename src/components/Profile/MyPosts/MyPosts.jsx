import React from "react";
import cls from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  return (
    <div className={cls.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea />
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className={cls.posts}>
        <Post message="Hi, how are you?" likesCount="0" />
        <Post message="It's my first post" likesCount="23" />
      </div>
    </div>
  );
};

export default MyPosts;
