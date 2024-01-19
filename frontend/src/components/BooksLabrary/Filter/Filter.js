import { useSelector, useDispatch } from 'react-redux';
import { setAddWords } from '../../../redux/slices/filterSlice';
import './Filter.css';
function Filter() {
  const filter = useSelector((state) => state.filter.title);

  const dispatch = useDispatch();
  const handleAddWords = (e) => {
    dispatch(setAddWords(e.target.value));
  };

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            value={filter}
            onChange={(e) => handleAddWords(e)}
            type="text"
            placeholder="Фільтер по назві книги..."
          />
        </div>
        <div className="filter-group">
          <input type="text" placeholder="Фільтер по автору..." />
        </div>
        <div className="filter-group">
          <label>
            <input type="checkbox" />
            Тільки вибрані книги
          </label>
        </div>
        <button type="button">Скинути фільтри</button>
      </div>
    </div>
  );
}

export default Filter;
