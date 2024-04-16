import cn from "classnames";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import SrokNetLogo from "src/assets/images/logo.svg";
import { MenuMobile } from "src/components/icons/MenuMobile";
import { useSelector } from "src/store";
import { selectIsMobileMenu } from "src/store/slices/isMobile/isMobile.selectors";
import "./Header.scss";

import { Menu } from "./components/Menu";
import { useHeadBar } from "./hooks/useHeadBar";

const Header = () => {
  const { isMobile, checkMobileOpen, checkMobileClosed } = useHeadBar();
  const { active } = useSelector(selectIsMobileMenu);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "auto";
      };
    }
  }, [active]);

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
            {/* <NavLink to="/information">Информация</NavLink>
            <NavLink to="/about-us">О нас</NavLink> */}
            <NavLink to="/">Калькулятор</NavLink>
            <NavLink to="/freedom">На свободу</NavLink>
            {/* <NavLink to="/contact-us">Напишите нам</NavLink> */}
            {/* <NavLink to="/profile">Профиль</NavLink> */}
          </div>
          <div className="status-bar-menu" onClick={checkMobileOpen}>
            <MenuMobile />
          </div>
          <div
            className={
              active ? "mobile-menu mobile-menu-active" : "mobile-menu"
            }
          >
            <Menu onClose={checkMobileClosed} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
