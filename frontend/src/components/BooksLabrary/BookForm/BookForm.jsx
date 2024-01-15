import { useState } from 'react';
import './BookForm.css';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle('');
    setAuthor('');
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
          </div>
          <button type="submit">Додати книгу</button>
        </form>
      </div>
    </>
  );
}
export default BookForm;
