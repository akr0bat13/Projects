export interface MenuData {
  id: string;
  icon?: JSX.Element;
}

export interface MenuItemData extends MenuData {
  submenu: SubMenuProps[];
}

export interface NavItemData extends MenuData {
  // TODO убрать опциональность после того: как будут все ссылки
  link?: string;
  onClose?(): void;
}

export type SubMenuProps = NavItemData;

export interface MenuClickableItem {
  onClick: (id: string, parendId: string | null) => void;
  activeItemId: string | null;
  parendId: string | null;
  onClose?(): void;
}

export interface MenuItemProps
  extends MenuData,
    SubMenuProps,
    MenuClickableItem {}
export const menuNav: SubMenuProps[] = [
  {
    link: "/information",
    id: "Information",
  },
  { link: "/about-us", id: "AboutUs" },
  {
    link: "/contact-us",
    id: "ContactUs",
  },
  {
    link: "/freedom",
    id: "Freedom",
  },
  {
    link: "/profile",
    id: "Profile",
  },
  {
    link: "/power",
    id: "Power",
  },
];
// export const menus: MenuItemData[] = [
//   {
//     id: "System",
//     submenu: menuNav,
//   },
// ];
