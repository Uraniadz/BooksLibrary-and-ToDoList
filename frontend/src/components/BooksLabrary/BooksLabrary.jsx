import BookForm from './BookForm/BookForm';
import Filter from './Filter/Filter';
import BookList from './BookList/Booklist';
import styles from './BooksLabrary.module.css';

function BooksLabrary() {
  return (
    <>
      <div className={styles['app']}>
        {/* <div className={styles['app-header']}>
          <h1>Моя улюблена бібліотека книг</h1>
        </div> */}
        <div className={styles['app-main']}>
          <div className={styles['app-left-column']}>
            <BookForm />
          </div>
          <div className={styles['app-right-column']}>
            <Filter />
            <BookList />
          </div>
        </div>
      </div>
    </>
  );
}

export default BooksLabrary;
