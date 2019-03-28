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
  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogItems}>
        <DialogItem name="Jorica" id="1" />
        <DialogItem name="Petrica" id="2" />
        <DialogItem name="Volodea" id="3" />
        <DialogItem name="Anton" id="4" />
        <DialogItem name="Cocos" id="5" />
      </div>
      <div className={cls.messages}>
        <Message message="Hi" />
        <Message message="How are you?" />
        <Message message="Fine!" />
      </div>
    </div>
  );
};

export default Dialogs;
