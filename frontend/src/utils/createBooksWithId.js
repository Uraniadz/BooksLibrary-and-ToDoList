import { v4 as uuidv4 } from 'uuid';

function createBooksWithId(action) {
  return {
    ...action,
    id: uuidv4(),
  };
}
export default createBooksWithId;
