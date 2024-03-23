import cn from "classnames";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import "./NavItem.scss";

import { P } from "src/components/UI/Text/P";

import { NavItemData } from "../../utils/constants/constants";

export const NavItem: FC<NavItemData> = ({ link, id, onClose }) => {
  const { t } = useTranslation();
  const title = t(id);
  const location = useLocation();

  const rememberLinkHandler = () => {
    if (!link) return;
  };

  const inner = (
    <div
      className={cn("nav-link", {
        "nav-link-active": location.pathname === link,
      })}
      onClick={onClose ? onClose : void 0}
    >
      <P variant="md">{title}</P>
    </div>
  );

  if (!link) {
    return inner;
  }

  return (
    <Link
      style={{
        textDecoration: "none",
        width: "100%",
      }}
      to={link}
      onClick={rememberLinkHandler}
    >
      {inner}
    </Link>
  );
};
