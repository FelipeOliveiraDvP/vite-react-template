import { menuItems } from './Menu.constants';
import { MenuItem } from './MenuItem';

export function Menu() {
  return menuItems.map((item) => <MenuItem key={item.path} item={item} />);
}
