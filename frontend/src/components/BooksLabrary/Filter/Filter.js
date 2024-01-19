import { useSelector, useDispatch } from 'react-redux';
import {
  setAddWords,
  setAddAuthor,
  setOnlyFavorite,
  setClearAllFilters,
} from '../../../redux/slices/filterSlice';
import './Filter.css';

function Filter() {
  const filterTitle = useSelector((state) => state.filter.title);
  const filterAuthor = useSelector((state) => state.filter.author);
  const filterOnlyFavorite = useSelector((state) => state.filter.onlyFavorite);

  const dispatch = useDispatch();

  const handleClearAllFilters = () => {
    dispatch(setClearAllFilters());
  };
  const handleChangeOnlyFavoriteBooks = (e) => {
    dispatch(setOnlyFavorite(e.target.value));
  };
  const handleAddAuthor = (e) => {
    dispatch(setAddAuthor(e.target.value));
  };

  const handleAddWords = (e) => {
    dispatch(setAddWords(e.target.value));
  };

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            value={filterTitle}
            onChange={(e) => handleAddWords(e)}
            type="text"
            placeholder="Фільтер по назві книги..."
          />
        </div>
        <div className="filter-group">
          <input
            value={filterAuthor}
            onChange={(e) => handleAddAuthor(e)}
            type="text"
            placeholder="Фільтер по автору..."
          />
        </div>
        <div className="filter-group">
          <label>
            <input
              value={filterOnlyFavorite}
              onChange={(e) => handleChangeOnlyFavoriteBooks(e)}
              type="checkbox"
            />
            Тільки вибрані книги
          </label>
        </div>
        <button type="button" onClick={handleClearAllFilters}>
          Скинути фільтри
        </button>
      </div>
    </div>
  );
}

export default Filter;
