import React from "react";
import cls from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  const newPostElement = React.createRef();

  const addPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    const value = newPostElement.current.value;
    props.updateNewPostText(value);
  };

  return (
    <div className={cls.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={cls.posts}>
        {props.posts.map(post => {
          return (
            <Post
              key={post.id}
              message={post.message}
              likesCount={post.likesCount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyPosts;
