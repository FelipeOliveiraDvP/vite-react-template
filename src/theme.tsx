import { generateColors } from '@mantine/colors-generator';
import {
  ActionIcon,
  Card,
  Drawer,
  Paper,
  Select,
  Stack,
  Table,
  Title,
  createTheme,
} from '@mantine/core';
import { RiArrowDownSLine } from 'react-icons/ri';

export const PRIMARY_COLOR = '#FF6600';

export const theme = createTheme({
  primaryColor: 'primary',
  primaryShade: 5,
  headings: {
    sizes: {
      h1: { fontSize: '24px', lineHeight: '36px', fontWeight: '700' },
    },
  },
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
    Table: Table.extend({
      styles: {
        th: {
          fontWeight: 500,
          fontSize: 12,
          color: '#868E96',
          whiteSpace: 'nowrap',
        },
        td: {
          fontWeight: 500,
          fontSize: 14,
          color: '#495057',
          whiteSpace: 'nowrap',
        },
      },
      defaultProps: {
        verticalSpacing: 'md',
        captionSide: 'bottom',
      },
    }),
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        variant: 'subtle',
        size: 'lg',
      },
      styles: {
        icon: {
          fontSize: 20,
        },
      },
    }),
    Title: Title.extend({
      defaultProps: {
        mb: 0,
      },
      styles: {
        root: {
          color: '#495057',
        },
      },
    }),
    Drawer: Drawer.extend({
      defaultProps: {
        position: 'right',
      },
    }),
  },
});
