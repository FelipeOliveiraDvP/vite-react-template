import { Group } from '@mantine/core';
import { MenuItem as MenuItemType } from './Menu.constants';

export function MenuItem({ item }: { item: MenuItemType }) {
  return (
    <Group>
      {item.icon}
      {item.label}
    </Group>
  );
}
