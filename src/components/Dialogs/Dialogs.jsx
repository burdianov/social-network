import React from "react";
import cls from "./Dialogs.module.css";

const Dialogs = props => {
  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogItems}>
        <div className={cls.dialog + " " + cls.active}>Jorica</div>
        <div className={cls.dialog}>Petrica</div>
        <div className={cls.dialog}>Volodea</div>
        <div className={cls.dialog}>Anton</div>
        <div className={cls.dialog}>Cocos</div>
      </div>
      <div className={cls.messages}>
        <div className={cls.message}>Hi</div>
        <div className={cls.message}>How are you?</div>
        <div className={cls.message}>Fine</div>
      </div>
    </div>
  );
};

export default Dialogs;
