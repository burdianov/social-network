import React from "react";
import cls from "./Header.module.css";

const Header = () => {
  return (
    <header className={cls.header}>
      <img
        src="https://www.freelogodesign.org/Content/img/logo-ex-7.png"
        alt="Company Name"
      />
    </header>
  );
};

export default Header;
