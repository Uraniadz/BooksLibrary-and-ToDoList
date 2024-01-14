import './BookForm.css';
function BookForm() {
  return (
    <>
      <div className="app-block book-form">
        <h2>Додати нову книгу</h2>
        <form>
          <div>
            <label htmlFor="title">Назва книги: </label>
            <input type="text" alt="" id="title" />
            <label htmlFor="author">Автор: </label>
            <input type="text" alt="" id="author" />
          </div>
          <button type="submit">Додати книгу</button>
        </form>
      </div>
    </>
  );
}
export default BookForm;
