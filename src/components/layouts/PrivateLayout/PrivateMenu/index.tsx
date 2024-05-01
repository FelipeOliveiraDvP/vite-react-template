import { Stack } from '@mantine/core';
import { CustomRouteObject, privateRoutes } from '@/routes';
import { PrivateMenuItem, PrivateMenuItemProps } from '../PrivateMenuItem';

export function PrivateMenu() {
  const routes: CustomRouteObject[] = privateRoutes.children || [];
  const menuItems: PrivateMenuItemProps[] = routes
    .filter((route) => route.meta && route.meta.icon)
    .map((route) => ({
      path: route.path || '/',
      label: route.meta?.title || '',
      icon: route.meta?.icon,
    }));

  return (
    <Stack gap={0}>
      {menuItems.map((item) => (
        <PrivateMenuItem key={item.path} item={item} />
      ))}
    </Stack>
  );
}
