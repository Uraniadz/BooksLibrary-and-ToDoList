import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './slices/booksSlice';
import errorSlice from './slices/errorSlice';
import filterSlice from './slices/filterSlice';

const store = configureStore({
  reducer: {
    books: booksSlice,
    error: errorSlice,
    filter: filterSlice,
  },
});

export default store;
