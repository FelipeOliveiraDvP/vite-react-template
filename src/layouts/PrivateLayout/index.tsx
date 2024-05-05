import { Suspense, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AppShell, Box, Burger, Center, Group, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { PageLoader } from '@/components/layouts/PageLoader';
import { UserDropdown } from '@/components/layouts/PrivateLayout/UserDropdown';
import { PrivateMenu } from '@/components/layouts/PrivateLayout/PrivateMenu';
import { useAuthContext } from '@/context/auth';

// NOTE: Import the logo for the sidebar.
// EX: import logo from '@/assets/logo-white.png';

export function PrivateLayout() {
  const { user } = useAuthContext();
  const [opened, { toggle, close }] = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    close();
  }, [location]);

  useEffect(() => {
    if (user === null) navigate('/');
  }, [user]);

  return (
    <AppShell
      layout="alt"
      header={{ height: { base: 60, md: 70, lg: 80 } }}
      navbar={{
        width: { base: 200, md: 250, lg: 300 },
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
          <Box bg="primary" w={{ base: '100%', md: 250, lg: 300 }} h={{ base: 60, md: 70, lg: 80 }}>
            <Group justify="space-between" p="md" h="100%">
              <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" color="white" />
              <Center w={{ md: '100%' }} h={{ md: '100%' }}>
                {/* NOTE: Add a image to display the logo. */}
                {/* EX: <Image src={logo} w={{ base: 58, md: 100 }} /> */}
              </Center>
            </Group>
          </Box>
          <PrivateMenu />
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main bg="#F8F9FA">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </AppShell.Main>
    </AppShell>
  );
}
