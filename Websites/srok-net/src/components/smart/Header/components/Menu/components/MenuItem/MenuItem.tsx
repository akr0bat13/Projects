import cn from "classnames";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import "./MenuItem.scss";

import { P } from "src/components/UI/Text/P";

import { MenuItemProps } from "../../utils/constants/constants";
import IconWrapper from "../IconWrapper/IconWrapper";

import { checkIfItemContainsActiveItem } from "./utils/helpers/getActiveMenuFromLocation";

export const MenuItem: FC<MenuItemProps> = (item) => {
  const { id, icon } = item;
  const { t } = useTranslation();
  const location = useLocation();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpenModal, setIsOpenModal] = useState(false);

  const title = t(id);

  const handelOpenMenu = () => {
    setIsOpenModal(true);
  };

  return (
    <>
      <div className="menu-item-wrapper">
        <div
          className={cn("menu-item", {
            "menu-item-children": !icon,
          })}
          onClick={handelOpenMenu}
        >
          <div className="menu-item-title">
            {icon && (
              <IconWrapper
                isOpen={
                  item.icon &&
                  checkIfItemContainsActiveItem(item, location.pathname)
                }
              >
                {icon}
              </IconWrapper>
            )}
            <P variant="md">{title}</P>
          </div>
        </div>
      </div>
    </>
  );
};
