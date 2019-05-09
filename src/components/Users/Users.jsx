import React, { Component } from "react";
import * as axios from "axios";
import cls from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";

class Users extends Component {
  constructor(props) {
    super(props);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  state = {};

  getUsers = () => {
    if (this.props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          this.props.setUsers(response.data.items);
        });
    }
  };

  render() {
    return (
      <div>
        {this.props.users.map(user => (
          <div key={user.id}>
            <span>
              <div>
                <img
                  src={
                    user.photos.small != null ? user.photos.small : userPhoto
                  }
                  className={cls.userPhoto}
                />
              </div>
              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(user.id);
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
  }
}

export default Users;
