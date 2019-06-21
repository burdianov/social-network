import React from "react";
import cls from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";

const Dialogs = props => {
  const { dialogs, messages, newMessageBody } = props.dialogsPage;

  const onSendMessageClick = () => {
    props.sendMessage();
  };

  const onNewMessageChange = e => {
    const body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogItems}>
        {dialogs.map(dialog => {
          return (
            <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
          );
        })}
      </div>
      <div className={cls.messages}>
        {messages.map(message => {
          return <Message key={message.id} message={message.message} />;
        })}
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Enter your message..."
            />
          </div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
