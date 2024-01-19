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
  const filterTitle = useSelector((state) => state.filter.title);
  const filterAuthor = useSelector((state) => state.filter.author);
  const filterOnlyFavorite = useSelector((state) => state.filter.onlyFavorite);

  const dispatch = useDispatch();

  const filterBooks = books.filter((book) => {
    const bookTitle = book.title
      .toLowerCase()
      .includes(filterTitle.toLowerCase());

    const bookAuthor = book.author
      .toLowerCase()
      .includes(filterAuthor.toLowerCase());

    const bookOnlyFavorite = filterOnlyFavorite ? book.isFavorite : true;

    return bookTitle && bookAuthor && bookOnlyFavorite;
  });

  const highlighFilter = (text, filter) => {
    if (!filter) {
      return text;
    }
    const regExt = new RegExp(`(${filter})`, 'gi');

    return text.split(regExt).map((subsrting, i) => {
      if (subsrting.toLowerCase() === filter.toLowerCase()) {
        return (
          <span className="highlight" key={i}>
            {subsrting}
          </span>
        );
      } else {
        return subsrting;
      }
    });
  };

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
          {filterBooks.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {'"'}
                {highlighFilter(book.title, filterTitle)}
                {'"'}
                <strong>
                  <i>
                    {' '}
                    <span className="">написана:</span>{' '}
                  </i>
                  {highlighFilter(book.author, filterAuthor)}
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
