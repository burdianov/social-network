import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount} pageSize={pageSize}/>
            {users.map(user => (
                <User key={user.id} user={user}
                      followingInProgress={props.followingInProgress}
                      follow={props.follow}
                      unfollow={props.unfollow}/>))
            }
        </div>
    );
};

export default Users;
