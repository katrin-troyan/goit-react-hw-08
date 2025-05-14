import AppBar from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
