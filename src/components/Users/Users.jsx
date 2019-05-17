import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";

const Users = props => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const currentPage = props.currentPage;

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map(page => {
          const classes = [];
          classes.push(styles.pageNumber);
          if (page === currentPage) {
            classes.push(styles.selectedPage);
          }
          return (
            <span
              className={classes.join(" ")}
              onClick={event => {
                props.onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>
      {props.users.map(user => (
        <div key={user.id}>
          <span>
            <div>
              <img
                src={user.photos.small != null ? user.photos.small : userPhoto}
                className={styles.userPhoto}
              />
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"user.location.country"}</div>
              <div>{"user.location.country"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
