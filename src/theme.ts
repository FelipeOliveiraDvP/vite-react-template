import { Card, Stack, createTheme } from '@mantine/core';

export const theme = createTheme({
  components: {
    Card: Card.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Stack: Stack.extend({
      defaultProps: {
        gap: 'md',
      },
    }),
  },
});
