import { lazy } from 'react';
import { PublicLayout } from '@/layouts/PublicLayout';
import { CustomRouteObject } from './routes.types';

const LoginPage = lazy(() => import('@/pages/public/Login'));
const RecoveryPage = lazy(() => import('@/pages/public/Recovery'));
const VerifyPage = lazy(() => import('@/pages/public/Verify'));
const ResetPage = lazy(() => import('@/pages/public/Reset'));
const PrivacyPage = lazy(() => import('@/pages/public/Privacy'));
const NotFoundPage = lazy(() => import('@/pages/errors/NotFound'));

export const publicRoutes: CustomRouteObject = {
  path: '/',
  element: <PublicLayout />,
  children: [
    {
      path: '/',
      element: <LoginPage />,
    },
    {
      path: '/esqueci-minha-senha',
      element: <RecoveryPage />,
    },
    {
      path: '/verificar',
      element: <VerifyPage />,
    },
    {
      path: '/alterar-senha',
      element: <ResetPage />,
    },
    {
      path: '/politica-de-privacidade',
      element: <PrivacyPage />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ],
};
