import React from 'react';
import {
  RiBuildingLine,
  RiFocusLine,
  RiListCheck3,
  RiPlayListAddLine,
  RiStore2Line,
  RiTicketLine,
  RiUser3Line,
  RiWhatsappLine,
} from 'react-icons/ri';

export interface MenuItemProps {
  path: string;
  label: string;
  icon: React.ReactNode;
}

export const menuItems: MenuItemProps[] = [
  {
    path: '/app/usuarios',
    label: 'Usuários',
    icon: <RiUser3Line />,
  },
  {
    path: '/app/condominios',
    label: 'Condomínios',
    icon: <RiBuildingLine />,
  },
  {
    path: '/app/categorias',
    label: 'Categorias',
    icon: <RiFocusLine />,
  },
  {
    path: '/app/avisos',
    label: 'Avisos',
    icon: <RiListCheck3 />,
  },
  {
    path: '/app/atividades',
    label: 'Atividades',
    icon: <RiPlayListAddLine />,
  },
  {
    path: '/app/grupos',
    label: 'Grupos',
    icon: <RiWhatsappLine />,
  },
  {
    path: '/app/eventos',
    label: 'Eventos',
    icon: <RiTicketLine />,
  },
  {
    path: '/app/servicos',
    label: 'Eventos',
    icon: <RiStore2Line />,
  },
];
