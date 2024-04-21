import { useEffect } from 'react';
import { Grid } from '@mantine/core';
import { Outlet, useNavigate } from 'react-router-dom';

import { useAuthContext } from '@/context/auth';
import classes from './PublicLayout.module.css';

const { VITE_APP_HOME } = import.meta.env;

export function PublicLayout() {
  const { authenticate, user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticate && user !== null) navigate(VITE_APP_HOME);
  }, [user]);

  return (
    <Grid
      className={classes.wrapper}
      styles={{ inner: { margin: 0, width: '100%', height: '100%' } }}
    >
      <Grid.Col className={classes.logoColumn} span={{ base: 12, md: 6 }}></Grid.Col>
      <Grid.Col className={classes.contentColumn} span={{ base: 12, md: 6 }}>
        <Outlet />
      </Grid.Col>
    </Grid>
  );
}
