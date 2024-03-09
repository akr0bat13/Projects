import cn from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";

import SrokNetLogo from "src/assets/images/logo.svg";
import { MenuMobile } from "src/components/icons/MenuMobile";
import "./Header.scss";

import { useHeadBar } from "./hooks/useHeadBar";

const Header = () => {
  const { isMobile, checkIsMobileHandler } = useHeadBar();

  return (
    <header
      className={cn("header", {
        "header-mobile": isMobile,
      })}
    >
      <div className="container">
        <div className="header-content">
          <a href="/">
            <img src={SrokNetLogo} alt="SrokNet" />
          </a>
          <div className="nav-links">
            <NavLink to="/information">Информация</NavLink>
            <NavLink to="/about-us">О нас</NavLink>
            <NavLink to="/freedom">На свободу</NavLink>
            <NavLink to="/contact-us">Напишите нам</NavLink>
            <NavLink to="/profile">Профиль</NavLink>
          </div>
          <div className="status-bar-menu" onClick={checkIsMobileHandler}>
            <MenuMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
