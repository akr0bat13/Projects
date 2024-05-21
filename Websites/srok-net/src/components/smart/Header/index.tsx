import cn from "classnames";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import SrokNetLogo from "src/assets/images/logo.svg";
import { MenuMobile } from "src/components/icons/MenuMobile";
import { useSelector } from "src/store";
import { selectIsMobileMenu } from "src/store/slices/isMobile/isMobile.selectors";
import "./Header.scss";

import Modal, { IModal } from "../Modal";

import { Menu } from "./components/Menu";
import { ContactUsForm } from "./components/Modals/ContactUsForm";
import { useHeadBar } from "./hooks/useHeadBar";

const Header = () => {
  const { isMobile, checkMobileOpen, checkMobileClosed } = useHeadBar();
  const { active } = useSelector(selectIsMobileMenu);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "auto";
      };
    }
  }, [active]);

  const handleClick = () => {
    setShowModal(true);
  };

  const showModalSettings: IModal = {
    active: showModal,
    setActive: setShowModal,
  };

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
            <a onClick={handleClick}>Напишите нам</a>
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
      <Modal {...showModalSettings}>
        <ContactUsForm />
      </Modal>
    </header>
  );
};

export default Header;
