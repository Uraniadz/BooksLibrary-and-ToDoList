import { useSelector, useDispatch } from 'react-redux';
import { BsBookmarkStarFill } from 'react-icons/bs';
import { BsBookmarkStar, BsTrash3Fill } from 'react-icons/bs';
import { GrClearOption } from 'react-icons/gr';
import {
  setDeleteBook,
  setToggleIsFavorite,
  setClearAllBooks,
} from '../../../redux/slices/booksSlice';
import './Booklist.css';

function BookList() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleClearAllBooks = () => {
    dispatch(setClearAllBooks());
  };
  const handleDeleteBookWithId = (id) => {
    dispatch(setDeleteBook(id));
  };
  const handleToggleIsFavoriteBook = (id) => {
    dispatch(setToggleIsFavorite(id));
  };

  return (
    <div className="app-block book-list">
      <h2>Список книг</h2>
      {books.length > 0 && (
        <div
          className="clear"
          title="Очистити весь список"
          onClick={handleClearAllBooks}
        >
          <GrClearOption className="clear-icons" />
        </div>
      )}
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
              <div className="book-actions">
                <span onClick={() => handleToggleIsFavoriteBook(book.id)}>
                  {' '}
                  {book.isFavorite ? (
                    <BsBookmarkStarFill
                      className="star-icon"
                      title="Додано у вибране"
                    />
                  ) : (
                    <BsBookmarkStar
                      className="star-icon"
                      title="Додати у вибране"
                    />
                  )}
                </span>

                <button
                  onClick={() => handleDeleteBookWithId(book.id)}
                  title="Видалити книгу"
                >
                  <BsTrash3Fill />
                </button>
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
