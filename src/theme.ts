import { generateColors } from '@mantine/colors-generator';
import { Card, Paper, Stack, createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'primary',
  primaryShade: 5,
  colors: {
    primary: generateColors('#FF6600'),
  },
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
    Paper: Paper.extend({
      defaultProps: {
        withBorder: true,
        p: 'md',
      },
    }),
  },
});
