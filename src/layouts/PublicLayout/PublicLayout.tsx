import { useEffect } from 'react';
import { BackgroundImage, Grid } from '@mantine/core';
import { Outlet, useNavigate } from 'react-router-dom';

import { useAuthContext } from '@/context/auth';

import background from '@/assets/background.png';

const { VITE_APP_HOME } = import.meta.env;

export function PublicLayout() {
  const { authenticate, user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticate && user !== null) navigate(VITE_APP_HOME);
  }, [user]);

  return (
    <Grid
      styles={{ root: { height: '100%' }, inner: { margin: 0, width: '100%', height: '100%' } }}
    >
      <Grid.Col span={{ base: 12, md: 6 }} p={0}>
        <BackgroundImage src={background} h="100%" />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Outlet />
      </Grid.Col>
    </Grid>
  );
}
