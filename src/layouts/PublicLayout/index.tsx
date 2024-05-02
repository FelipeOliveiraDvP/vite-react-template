import { Suspense, useEffect } from 'react';
import { Grid } from '@mantine/core';
import { Outlet, useNavigate } from 'react-router-dom';

import { PageLoader } from '@/components/layouts/PageLoader';
import { useAuthContext } from '@/context/auth';

// NOTE: Import the banner for the left column.
// EX: import background from '@/assets/background.png';

const { VITE_HOME } = import.meta.env;

export function PublicLayout() {
  const { authenticate, user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticate && user !== null) navigate(VITE_HOME || '/app/usuarios');
  }, [user]);

  return (
    <Grid
      styles={{ root: { height: '100%' }, inner: { margin: 0, width: '100%', height: '100%' } }}
    >
      <Grid.Col span={{ base: 12, md: 6 }} p={0} bg="primary">
        {/* NOTE: Add a BackgroundImage component to fill the column. */}
        {/* EX: <BackgroundImage src={background} h="100%" /> */}
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </Grid.Col>
    </Grid>
  );
}
