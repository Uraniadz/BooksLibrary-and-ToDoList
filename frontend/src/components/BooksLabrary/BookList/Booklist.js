import { useSelector } from 'react-redux';
import './Booklist.css';

function BookList() {
  const books = useSelector((state) => state.books);

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>

      {books.length > 0 ? (
        <ul>
          {books.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {'"'} {book.title}
                {'"'}
                <strong>
                  <i>
                    {' '}
                    <span className="">написана:</span>{' '}
                  </i>
                  {book.author}
                </strong>{' '}
                {book.date} {'('}
                {book.source}
                {')'}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>Бібліотека пуста</div>
      )}
    </div>
  );
}

export default BookList;
