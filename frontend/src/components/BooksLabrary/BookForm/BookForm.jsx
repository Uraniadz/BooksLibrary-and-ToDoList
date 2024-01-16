import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAddBook, setRandomBook } from '../../../redux/slices/booksSlice';
import { setError } from '../../../redux/slices/errorSlice';
import createBooksWithId from '../../../utils/createBooksWithId';
import './BookForm.css';
import books from '../../../data/books.json';
import { fetchBooks } from '../../../redux/slices/booksSlice';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useDispatch();

  const handleBookViaAPI = () => {
    dispatch(fetchBooks('http://localhost:5000/books-api'));
  };

  const handleRandomBook = () => {
    const indexBook = Math.floor(Math.random() * books.length);
    const randomBook = books[indexBook];
    dispatch(setRandomBook(createBooksWithId(randomBook, 'Random')));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(
        setAddBook(createBooksWithId({ title, author, date }, 'Manual'))
      );
    } else {
      dispatch(setError('Заповніть "Назву книги" та "Автора"'));
    }
    setTitle('');
    setAuthor('');
    setDate('');
  };
  return (
    <>
      <div className="app-block book-form">
        <h2>Додати нову книгу</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Назва книги: </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              alt=""
              id="title"
            />
            <label htmlFor="author">Автор: </label>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              alt=""
              id="author"
            />
            <label htmlFor="date">Дата (за бажанням): </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              alt=""
            />
          </div>

          <button type="submit">Додати книгу</button>
          <button onClick={handleRandomBook} type="button">
            Випадкова книга
          </button>
          <button onClick={handleBookViaAPI} type="button">
            Книга онлайн
          </button>
        </form>
      </div>
    </>
  );
}
export default BookForm;
