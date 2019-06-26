import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUserProfile } from "./../../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

// const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = state => {
  return { profile: state.profilePage.profile };
};

export default compose(
  connect(
    mapStateToProps,
    { getUserProfile }
  ),
  withRouter
  // withAuthRedirect
)(ProfileContainer);

// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(
//   mapStateToProps,
//   { getUserProfile }
// )(WithUrlDataContainerComponent);
