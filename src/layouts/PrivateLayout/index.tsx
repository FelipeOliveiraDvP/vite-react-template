import { AppShell, Box, Burger, Center, Group, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';

import classes from './styles.module.css';
import { UserDropdown } from '@/components/auth/UserDropdown';
import { Menu } from '@/components/layout/Menu';

export function PrivateLayout() {
  const [opened, { toggle }] = useDisclosure();

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
          <Menu />
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
