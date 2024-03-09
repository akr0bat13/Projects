import cn from "classnames";
import { FC, useState } from "react";
import "./MenuItem.scss";

import { MenuItemProps } from "../../utils/constants/constants";
import { NavItem } from "../NavItem/NavItem";

export const MenuItem: FC<MenuItemProps> = (item) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handelOpenMenu = () => {
    setIsOpenModal(true);
  };

  return (
    <>
      <div className="menu-item-wrapper">
        <div
          className={cn("menu-item", {
            "menu-item-children": !item.icon,
          })}
          onClick={handelOpenMenu}
        >
          <div className="menu-item-title">
            <NavItem
              onClose={item.onClose}
              icon={item.icon}
              link={item.link}
              id={item.id}
            />
          </div>
        </div>
      </div>
    </>
  );
};
