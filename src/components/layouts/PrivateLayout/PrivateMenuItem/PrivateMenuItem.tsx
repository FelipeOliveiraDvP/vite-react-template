import { Link, useLocation } from 'react-router-dom';
import { Group, UnstyledButton } from '@mantine/core';
import { PrivateMenuItemProps } from './PrivateMenuItem.types';

import classes from './PrivateMenuItem.module.css';

export function PrivateMenuItem({ item }: { item: PrivateMenuItemProps }) {
  const { pathname } = useLocation();

  return (
    <UnstyledButton
      className={classes.item}
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
