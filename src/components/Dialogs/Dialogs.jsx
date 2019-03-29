import React from "react";
import cls from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
  const dialogs = [
    { id: 1, name: "Jorica" },
    { id: 2, name: "Petrica" },
    { id: 3, name: "Volodea" },
    { id: 4, name: "Anton" },
    { id: 5, name: "Cocos" }
  ];

  const messages = [
    { id: 1, message: "Hello" },
    { id: 2, message: "Hi" },
    { id: 3, message: "How are you" },
    { id: 4, message: "Fine" },
    { id: 5, message: "Good" }
  ];

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
      </div>
    </div>
  );
};

export default Dialogs;
