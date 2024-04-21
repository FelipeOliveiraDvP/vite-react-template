import { Link, useLocation } from 'react-router-dom';
import { Group, UnstyledButton } from '@mantine/core';
import { MenuItemProps } from '../PrivateMenu/PrivateMenu.utils';

import classes from './MenuItem.module.css';

export function MenuItem({ item }: { item: MenuItemProps }) {
  const { pathname } = useLocation();

  return (
    <UnstyledButton
      className={classes.menuItem}
      component={Link}
      to={item.path}
      data-active={pathname.includes(item.path) || undefined}
    >
      <Group>
        {item.icon}
        {item.label}
      </Group>
    </UnstyledButton>
  );
}
