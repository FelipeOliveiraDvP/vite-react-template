import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { PublicLayout } from './layouts/PublicLayout/PublicLayout';
import { PrivateLayout } from './layouts/PrivateLayout/PrivateLayout';

import { LoginPage } from './pages/Public/Login/Login.page';
import { RecoveryPage } from './pages/Public/Recovery/Recovery.page';
import { VerifyPage } from './pages/Public/Verify/Verify.page';
import { ResetPage } from './pages/Public/Reset/Reset.page';
import { PrivacyPage } from './pages/Public/Privacy/Privacy.page';

import { UsersPage } from './pages/Private/Users/Users.page';
import { UsersResidentPage } from './pages/Private/Users/UsersResident.page';
import { BuildingsPage } from './pages/Private/Buildings/Buildings.page';

import { NotFoundPage } from './pages/Errors/NotFound/NotFound.page';

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
        path: '/app/usuarios',
        element: <UsersPage />,
      },
      {
        path: '/app/usuarios/:userId',
        element: <UsersResidentPage />,
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
