import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';

import '@mantine/core/styles.css';
import './global.css';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}
