import React, { Component } from "react";

class ProfileStatus extends Component {
  state = {
    editMode: false
  };
  activateEditMode = e => {
    this.setState({
      editMode: true
    });
  };
  deactivateEditMode = e => {
    this.setState({
      editMode: false
    });
  };
  render() {
    return (
      <>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.props.status}
            />
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
