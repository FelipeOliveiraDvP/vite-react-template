import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RiUser3Line } from 'react-icons/ri';
import { PrivateLayout } from '@/layouts/PrivateLayout';
import { CustomRouteObject } from './routes.types';

const UsersPage = lazy(() => import('@/pages/private/Users'));
const NotFoundPage = lazy(() => import('@/pages/errors/NotFound'));

const { VITE_APP_HOME } = import.meta.env;

export const privateRoutes: CustomRouteObject = {
  path: '/app',
  element: <PrivateLayout />,
  children: [
    {
      path: '/app',
      element: <Navigate to={VITE_APP_HOME || '/app/usuarios'} />,
    },
    {
      path: VITE_APP_HOME || '/app/usuarios',
      element: <UsersPage />,
      meta: {
        title: 'Usuários',
        icon: <RiUser3Line />,
      },
    },
    {
      path: '*',
      element: <NotFoundPage />,
      meta: {
        title: 'Página não encontrada',
      },
    },
  ],
};
