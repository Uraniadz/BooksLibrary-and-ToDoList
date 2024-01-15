import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAddBook } from '../../../redux/slices/booksSlice';
import createBooksWithId from '../../../utils/createBooksWithId';
import './BookForm.css';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(setAddBook(createBooksWithId({ title, author, date })));
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
        </form>
      </div>
    </>
  );
}
export default BookForm;
