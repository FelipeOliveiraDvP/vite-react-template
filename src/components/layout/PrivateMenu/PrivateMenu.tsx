import { Stack } from '@mantine/core';
import { MenuItem } from '../MenuItem/MenuItem';
import { menuItems } from './PrivateMenu.utils';

export function PrivateMenu() {
  return (
    <Stack gap={0}>
      {menuItems.map((item) => (
        <MenuItem key={item.path} item={item} />
      ))}
    </Stack>
  );
}
