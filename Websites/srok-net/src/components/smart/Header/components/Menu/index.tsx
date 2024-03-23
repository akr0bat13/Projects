import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Menu.scss";

import { Button } from "src/components/UI/Button/Button";
import { CloseIcon } from "src/components/icons/CloseIcon";

import { MenuItem } from "./components/MenuItem/MenuItem";
// import { getActiveMenuFromLocation } from "./components/MenuItem/utils/helpers/getActiveMenuFromLocation";
import { menuNav } from "./utils/constants/constants";

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
    // setActiveItem(getActiveMenuFromLocation(location.pathname));
  }, [location.pathname]);

  return (
    <div className="menu-bar-wrapper">
      <Button onClick={onClose} icon={<CloseIcon />} />

      {menuNav.map((item) => (
        <MenuItem
          parendId={null}
          id={item.id}
          key={item.id}
          link={item.link}
          icon={item.icon}
          onClick={onClick}
          activeItemId={activeItem}
          onClose={onClose}
        />
      ))}
    </div>
  );
};
