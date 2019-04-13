import React from "react";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { dialogsPage: state.dialogsPage };
};

const mapDispatchToProps = dispatch => {
  return {
    updateNewMessageBody: () => {
      dispatch(sendMessageCreator());
    },
    sendMesage: body => {
      dispatch(updateNewMessageBodyCreator(body));
    }
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
