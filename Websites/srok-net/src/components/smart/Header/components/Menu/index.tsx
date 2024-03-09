import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Menu.scss";

import { MenuItem } from "./components/MenuItem/MenuItem";
import { getActiveMenuFromLocation } from "./components/MenuItem/utils/helpers/getActiveMenuFromLocation";
import { menus } from "./utils/constants/constants";

export interface IMenuProps {
  onClose?(): void;
}

export const Menu: FC<IMenuProps> = ({ onClose }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const location = useLocation();

  const onClick = (id: string, parendId: string | null) => {
    setActiveItem(id === activeItem ? parendId : id);
  };

  useEffect(() => {
    setActiveItem(getActiveMenuFromLocation(location.pathname));
  }, [location.pathname]);

  return (
    <div className="menu-bar-wrapper">
      {menus.map((menu) => (
        <MenuItem
          parendId={null}
          id={menu.id}
          key={menu.id}
          icon={menu.icon}
          onClick={onClick}
          activeItemId={activeItem}
          onClose={onClose}
        />
      ))}
    </div>
  );
};
