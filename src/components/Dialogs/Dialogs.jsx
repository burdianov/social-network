import React from "react";
import cls from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  const path = "/dialogs/" + props.id;
  return (
    <div className={cls.dialog + " " + cls.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={cls.message}>{props.message}</div>;
};

const Dialogs = props => {
  const dialogData = [
    { id: 1, name: "Jorica" },
    { id: 2, name: "Petrica" },
    { id: 3, name: "Volodea" },
    { id: 4, name: "Anton" },
    { id: 5, name: "Cocos" }
  ];

  const messageData = [
    { id: 1, message: "Hello" },
    { id: 2, message: "Hi" },
    { id: 3, message: "How are you" },
    { id: 4, message: "Fine" },
    { id: 5, message: "Good" }
  ];

  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogItems}>
        {dialogData.map(data => {
          return <DialogItem key={data.id} id={data.id} name={data.name} />;
        })}
      </div>
      <div className={cls.messages}>
        {messageData.map(data => {
          return <Message key={data.id} message={data.message} />;
        })}
      </div>
    </div>
  );
};

export default Dialogs;
