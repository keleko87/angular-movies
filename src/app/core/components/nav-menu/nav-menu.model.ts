export interface NavMenu {
  items: NavMenuItem[];
}

export interface NavMenuItem {
  label: string;
  path: string;
  icon?: string;
}
