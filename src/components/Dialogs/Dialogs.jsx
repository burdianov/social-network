import React from "react";
import cls from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = props => {
  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogItems}>
        <div className={cls.dialog + " " + cls.active}>
          <NavLink to="/dialogs/1">Jorica</NavLink>
        </div>
        <div className={cls.dialog}>
          <NavLink to="/dialogs/2">Petrica</NavLink>
        </div>
        <div className={cls.dialog}>
          <NavLink to="/dialogs/3">Volodea</NavLink>
        </div>
        <div className={cls.dialog}>
          <NavLink to="/dialogs/4">Anton</NavLink>
        </div>
        <div className={cls.dialog}>
          <NavLink to="/dialogs/5">Cocos</NavLink>
        </div>
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
