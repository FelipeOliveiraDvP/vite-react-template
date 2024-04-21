import { Outlet } from 'react-router-dom';

export function PrivateLayout() {
  return (
    <div>
      <h1>Privado</h1>
      <Outlet />
    </div>
  );
}
