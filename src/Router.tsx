import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { PublicLayout } from './layouts/PublicLayout';
import { PrivateLayout } from './layouts/PrivateLayout';

import { LoginPage } from './pages/Public/Login';
import { RecoveryPage } from './pages/Public/Recovery';
import { VerifyPage } from './pages/Public/Verify';
import { ResetPage } from './pages/Public/Reset';
import { PrivacyPage } from './pages/Public/Privacy';

import { BuildingsPage } from './pages/Private/Buildings';

import { NotFoundPage } from './pages/Errors/NotFound';

const { VITE_APP_HOME } = import.meta.env;

const router = createBrowserRouter([
  {
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
  },
  {
    path: '/app',
    element: <PrivateLayout />,
    children: [
      {
        path: '/app',
        element: <Navigate to={VITE_APP_HOME} />,
      },
      {
        path: VITE_APP_HOME,
        element: <BuildingsPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
