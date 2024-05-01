import { generateColors } from '@mantine/colors-generator';
import { RiArrowDownSLine } from 'react-icons/ri';
import {
  ActionIcon,
  Card,
  Center,
  Drawer,
  Group,
  Modal,
  Paper,
  Select,
  Stack,
  Table,
  Title,
  createTheme,
} from '@mantine/core';

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
    Card: Card.extend({
      defaultProps: {
        withBorder: true,
        w: 400,
      },
    }),
    Center: Center.extend({
      defaultProps: {
        h: '100%',
      },
    }),
    Drawer: Drawer.extend({
      defaultProps: {
        position: 'right',
      },
    }),
    Group: Group.extend({
      defaultProps: {
        gap: 'xs',
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        centered: true,
      },
      styles: {
        title: {
          fontWeight: 500,
        },
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
    Stack: Stack.extend({
      defaultProps: {
        gap: 'md',
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
    Title: Title.extend({
      styles: {
        root: {
          color: '#495057',
        },
      },
    }),
  },
});
