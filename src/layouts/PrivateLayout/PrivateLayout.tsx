import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AppShell, Box, Burger, Center, Group, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { UserDropdown } from '@/components/layout/UserDropdown/UserDropdown';
import { PrivateMenu } from '@/components/layout/PrivateMenu/PrivateMenu';

import classes from './PrivateLayout.module.css';

export function PrivateLayout() {
  const [opened, { toggle, close }] = useDisclosure();
  const location = useLocation();

  useEffect(() => {
    close();
  }, [location]);

  return (
    <AppShell
      layout="alt"
      header={{ height: { base: 60, md: 70, lg: 80 } }}
      navbar={{
        width: { base: 200, md: 300, lg: 400 },
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div></div>
          <UserDropdown />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <Stack>
          <Box
            className={classes.logo}
            w={{ base: '100%', md: 300, lg: 400 }}
            h={{ base: 60, md: 70, lg: 80 }}
          >
            <Group justify="space-between" p="md" h="100%">
              <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
              <Center w={{ md: '100%' }} h={{ md: '100%' }}>
                Logo
              </Center>
            </Group>
          </Box>
          <PrivateMenu />
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
