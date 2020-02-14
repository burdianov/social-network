import React, {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {
    getUserProfile,
    getStatus,
    updateStatus
} from "../../redux/profile-reducer";
import {compose} from "redux";
import {savePhoto, saveProfile} from "../../redux/profile-reducer";

// inside a functional component, the history can be obtained as follows:
// import history from "history/createBrowserHistory";

class ProfileContainer extends Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorisedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile
                    isOwner={!this.props.match.params.userId}
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorisedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    };
};

export default compose(
    connect(
        mapStateToProps,
        {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}
    ),
    withRouter
)(ProfileContainer);
