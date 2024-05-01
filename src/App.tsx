import { Notifications } from '@mantine/notifications';
import { QueryClientProvider } from '@tanstack/react-query';
import { MantineProvider } from '@mantine/core';

import { AuthProvider } from './context/auth';
import { Router } from './routes';
import { theme } from './theme';
import { queryClient } from './config/react-query';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import './global.css';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <MantineProvider theme={theme}>
          <Notifications position="bottom-right" zIndex={1000} />
          <Router />
        </MantineProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
