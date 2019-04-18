import React from "react";
import cls from "./Users.module.css";

const Users = props => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Dmitry_Nagiev_2017_3.jpg/220px-Dmitry_Nagiev_2017_3.jpg",
        followed: false,
        fullName: "Volodea",
        status: "I am the boss",
        location: { city: "Minsk", country: "Belorus" }
      },
      {
        id: 2,
        photoUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Dmitry_Nagiev_2017_3.jpg/220px-Dmitry_Nagiev_2017_3.jpg",
        followed: true,
        fullName: "Andrusa",
        status: "Cunosc da n-asa",
        location: { city: "Abu Dhabi", country: "UAE" }
      },
      {
        id: 3,
        photoUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Dmitry_Nagiev_2017_3.jpg/220px-Dmitry_Nagiev_2017_3.jpg",
        followed: false,
        fullName: "Jorica",
        status: "Tot caminul 9 la lucru",
        location: { city: "Chisinau", country: "Moldova" }
      }
    ]);
  }
  return (
    <div>
      {props.users.map(user => (
        <div key={user.id}>
          <span>
            <div>
              <img src={user.photoUrl} className={cls.userPhoto} />
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
              <div>{user.fullName}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.country}</div>
              <div>{user.location.country}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
