import { NavItemData } from "../../../../utils/constants/constants";

export function isNavItemDataWithLink(item: any): item is NavItemData {
  return !!item.link;
}
