import React, { Component } from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";

class ProfileContainer extends Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/profile/2")
      .then(response => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { profile: state.profilePage.profile };
};

export default connect(
  mapStateToProps,
  { setUserProfile }
)(ProfileContainer);
