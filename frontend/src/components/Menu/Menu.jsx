import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <>
      <nav className="menu">
        <Link to=".">Головна</Link>
        <Link to="books">Бібліотека книг</Link>
        <Link to="todolist">Список справ</Link>
      </nav>
    </>
  );
}
export default Menu;
