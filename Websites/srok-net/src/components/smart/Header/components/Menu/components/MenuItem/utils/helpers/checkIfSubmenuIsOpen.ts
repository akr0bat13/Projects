import { MenuData, MenuItemData } from "../../../../utils/constants/constants";

import { isMenuData } from "./typeguards";

export function checkIfSubmenuIsOpen(item: MenuItemData, activeItem: string) {
  if (isMenuItemActive(item, activeItem)) {
    return true;
  }
  if (!item.submenu) {
    return false;
  }
  for (let i = 0; i < item.submenu.length; i++) {
    const current = item.submenu[i];
    if (isMenuItemActive(current, activeItem)) {
      return true;
    }
    if (isMenuData(current) && checkIfSubmenuIsOpen(current, activeItem)) {
      return true;
    }
  }
  return false;
}

function isMenuItemActive(item: MenuData, activeItem: string) {
  return item.id === activeItem;
}
