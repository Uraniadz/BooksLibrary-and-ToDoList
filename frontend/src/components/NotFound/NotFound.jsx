import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="notfound">
      <h1>
        Увага! Ви нажали не вірне посилання. Повернутися на{' '}
        <Link to="/" className="notfound-link">
          <strong>головну сторінку</strong>
        </Link>
      </h1>
    </div>
  );
}

export default NotFound;
