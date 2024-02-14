import React from "react";
import { NavLink } from "react-router-dom";

import SrokNetLogo from "src/assets/images/logo.svg";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img src={SrokNetLogo} alt="" />
      <div className="nav-links">
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/calculation">Калькулятор</NavLink>
        <NavLink to="/for-loyers">Для адвокатов</NavLink>
        <NavLink to="/explanations">Разъяснения</NavLink>
        <NavLink to="/about-us">О нас</NavLink>
        <NavLink to="/contact-us">Напишите нам</NavLink>
      </div>
    </header>
  );
};

export default Header;
