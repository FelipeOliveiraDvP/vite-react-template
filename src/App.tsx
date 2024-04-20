import { QueryClientProvider } from '@tanstack/react-query';
import { MantineProvider } from '@mantine/core';
import { AuthProvider } from './context/auth';
import { Router } from './Router';
import { theme } from './theme';
import queryClient from './config/react-query';

import '@mantine/core/styles.css';
import './global.css';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <MantineProvider theme={theme}>
          <Router />
        </MantineProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
