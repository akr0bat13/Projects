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
  // {
  //   link: "/information",
  //   id: "Информация",
  // },
  // { link: "/about-us", id: "О нас" },
  {
    link: "/",
    id: "Калькулятор",
  },
  {
    link: "/freedom",
    id: "На свободу",
  },
  {
    id: "Напишите нам",
  },
  // {
  //   link: "/profile",
  //   id: "Профиль",
  // },
];
// export const menus: MenuItemData[] = [
//   {
//     id: "System",
//     submenu: menuNav,
//   },
// ];
