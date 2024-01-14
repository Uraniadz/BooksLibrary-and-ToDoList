import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu/Menu';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default MainLayout;
