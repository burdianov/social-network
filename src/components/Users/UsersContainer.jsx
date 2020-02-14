import React, {Component} from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {follow, unfollow, requestUsers} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {toggleFollowingInProgress} from "../../redux/users-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getPageSize,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress,
    getUsers
} from "../../redux/users-selectors";
import {getTotalUsersCount} from "./../../redux/users-selectors";

class UsersContainer extends Component {
    componentDidMount() {
        const {requestUsers, currentPage, pageSize} = this.props;
        requestUsers(currentPage, pageSize);
    }

    onPageChanged = pageNumber => {
        const {requestUsers, pageSize} = this.props;
        requestUsers(pageNumber, pageSize);
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    };
};

export default compose(
    withAuthRedirect,
    connect(
        mapStateToProps,
        {
            follow,
            unfollow,
            toggleFollowingInProgress,
            requestUsers
        }
    )
)(UsersContainer);
