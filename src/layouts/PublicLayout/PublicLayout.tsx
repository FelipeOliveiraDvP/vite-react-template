import { Grid } from '@mantine/core';
import { Outlet } from 'react-router-dom';

import classes from './PublicLayout.module.css';

export function PublicLayout() {
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
