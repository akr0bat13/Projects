export interface MenuData {
  id: string;
  icon?: JSX.Element;
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

export interface MenuItemProps extends MenuData, MenuClickableItem {}

export const menus: MenuData[] = [
  {
    id: "System",
  },
  {
    id: "information",
  },
  {
    id: "about-us",
  },
  {
    id: "contact-us",
  },
  {
    id: "freedom",
  },
  {
    id: "profile",
  },
];
