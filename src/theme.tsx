import { generateColors } from '@mantine/colors-generator';
import { Card, Paper, Select, Stack, createTheme } from '@mantine/core';
import { RiArrowDownSLine } from 'react-icons/ri';

export const PRIMARY_COLOR = '#FF6600';

export const theme = createTheme({
  primaryColor: 'primary',
  primaryShade: 5,
  colors: {
    primary: generateColors(PRIMARY_COLOR),
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
    Select: Select.extend({
      defaultProps: {
        rightSection: <RiArrowDownSLine color={PRIMARY_COLOR} />,
      },
    }),
  },
});
