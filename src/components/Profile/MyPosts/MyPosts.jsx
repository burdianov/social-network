import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
  const postsElements = props.posts.map(p => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  const newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    const value = newPostElement.current.value;
    props.updateNewPostText(value);
  };

  return (
    <div className={styles.postsBlock}>
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
          <button onClick={onAddPost}>Add Post</button>
        </div>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
