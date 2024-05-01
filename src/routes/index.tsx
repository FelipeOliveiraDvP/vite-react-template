import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { publicRoutes } from './public.routes';
import { privateRoutes } from './private.routes';
import { CustomRouteObject } from './routes.types';

export const router = createBrowserRouter([{ ...publicRoutes }, { ...privateRoutes }]);

export function Router() {
  return <RouterProvider router={router} />;
}

export { publicRoutes, privateRoutes };
export type { CustomRouteObject };
