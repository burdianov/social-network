import React from "react";
import cls from "./Post.module.css";

const Post = props => {
  //debugger;

  return (
    <div className={cls.item}>
      <img
        src="https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"
        alt=""
      />
      {props.message}
      <div>
        <span>likes</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
