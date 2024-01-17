import { v4 as uuidv4 } from 'uuid';

function createBooksWithId(action, source) {
  return {
    ...action,
    isFavorite: false,
    source,
    id: uuidv4(),
  };
}
export default createBooksWithId;
