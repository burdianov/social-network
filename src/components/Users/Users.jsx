import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, followingInProgress, follow, unfollow}) => {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount} pageSize={pageSize}/>
            {users.map(user => (
                <User key={user.id} user={user}
                      followingInProgress={followingInProgress} follow={follow}
                      unfollow={unfollow}/>))
            }
        </div>
    );
};

export default Users;
