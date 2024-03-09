import {
  NavItemData,
  SubMenuProps,
  menus,
} from "../../../../utils/constants/constants";

import { isNavItemDataWithLink } from "./typeguards";

const ifMenuItemIsActive = (item: NavItemData, location: string) =>
  item.link === location;

export const checkIfItemContainsActiveItem = (
  item: SubMenuProps,
  location: string
): boolean => {
  if (isNavItemDataWithLink(item) && ifMenuItemIsActive(item, location)) {
    return true;
  }

  return false;
};

const findActiveItemId = (
  item: SubMenuProps,
  location: string
): string | null => {
  if (isNavItemDataWithLink(item)) {
    return ifMenuItemIsActive(item, location) ? item.id : null;
  }

  return null;
};

export const getActiveMenuFromLocation = (location: string): string | null => {
  for (let i = 0; i < menus.length; i++) {
    const active_item_id = findActiveItemId(menus[i], location);
    if (active_item_id) {
      return active_item_id;
    }
  }
  return null;
};
