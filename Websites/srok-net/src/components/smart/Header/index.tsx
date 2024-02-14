import React from "react";
import { NavLink } from "react-router-dom";

import SrokNetLogo from "src/assets/images/logo.svg";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="/">
            <img src={SrokNetLogo} alt="SrokNet" />
          </a>
          <div className="nav-links">
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/calculation">Калькулятор</NavLink>
            <NavLink to="/for-loyers">Для адвокатов</NavLink>
            <NavLink to="/explanations">Разъяснения</NavLink>
            <NavLink to="/about-us">О нас</NavLink>
            <NavLink to="/contact-us">Напишите нам</NavLink>
          </div>
          <div className="header-buttons"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
