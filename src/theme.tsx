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

const { VITE_PRIMARY_COLOR } = import.meta.env;

export const PRIMARY_COLOR = VITE_PRIMARY_COLOR || '#1C7ED6';

export const theme = createTheme({
  primaryColor: 'primary',
  primaryShade: 5,
  headings: {
    sizes: {
      h1: { fontSize: '24px', lineHeight: '36px', fontWeight: '700' },
    },
  },
  colors: {
    primary: generateColors(VITE_PRIMARY_COLOR || '#1C7ED6'),
    gray: [
      '#F8F9FA',
      '#F1F3F5',
      '#E9ECEF',
      '#DEE2E6',
      '#CED4DA',
      '#ADB5BD',
      '#868E96',
      '#495057',
      '#343A40',
      '#212529',
    ],
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
        rightSection: <RiArrowDownSLine color={VITE_PRIMARY_COLOR || '#1C7ED6'} />,
      },
    }),
    Stack: Stack.extend({
      defaultProps: {
        gap: 'md',
      },
    }),
    Table: Table.extend({
      styles: (th) => ({
        th: {
          fontWeight: 500,
          fontSize: 12,
          color: th.colors.gray[6],
          whiteSpace: 'nowrap',
        },
        td: {
          fontWeight: 500,
          fontSize: 14,
          color: th.colors.gray[7],
          whiteSpace: 'nowrap',
        },
      }),
      defaultProps: {
        verticalSpacing: 'md',
        captionSide: 'bottom',
      },
    }),
    Title: Title.extend({
      styles: (th) => ({
        root: {
          color: th.colors.gray[7],
        },
      }),
    }),
  },
});
