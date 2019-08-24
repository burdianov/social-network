import React, { memo } from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "./../../common/FormControls/FormControls";
import {
  required,
  maxLengthCreator
} from "./../../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10);

const MyPosts = memo(props => {
  const postsElements = props.posts.map(p => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  const addPost = values => {
    props.addPost(values.newPostText);
  };
  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <AddPostFormRedux onSubmit={addPost} />
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
});

const AddPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={Textarea}
          placeholder="Enter new message..."
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm({ form: "ProfileAddPostForm" })(AddPostForm);

export default MyPosts;
