import React from "react";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = props => {
  const state = props.store.getState().dialogsPage;

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  const onNewMessageChange = body => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <Dialogs
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
