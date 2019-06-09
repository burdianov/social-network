import React, { Component } from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
} from "../../redux/usersReducer";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
        this.props.toggleIsFetching(false);
      });
  }

  onPageChanged = pageNumber => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);

    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.setUsers(data.items);
      this.props.toggleIsFetching(false);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     follow: userId => {
//       dispatch(follow(userId));
//     },
//     unfollow: userId => {
//       dispatch(unfollow(userId));
//     },
//     setUsers: users => {
//       dispatch(setUser(users));
//     },
//     setCurrentPage: currentPage => {
//       dispatch(setCurrentPage(currentPage));
//     },
//     setTotalUsersCount: totalCount => {
//       dispatch(setTotalUsersCount(totalCount));
//     },
//     toggleIsFetching: isFetching => {
//       dispatch(toggleIsFetching(isFetching));
//     }
//   };
// };

export default connect(
  mapStateToProps,
  {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
  }
)(UsersContainer);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(UsersContainer);
