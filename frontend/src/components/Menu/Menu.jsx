import { NavLink } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <>
      <nav className="menu">
        <NavLink to=".">Головна</NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'myactive' : '')}
          to="books"
        >
          Бібліотека книг
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'myactive-green' : '')}
          to="todolist"
        >
          Список справ
        </NavLink>
      </nav>
    </>
  );
}
export default Menu;
