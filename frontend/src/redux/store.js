import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './slices/booksSlice';
import errorSlice from './slices/errorSlice';

const store = configureStore({
  reducer: {
    books: booksSlice,
    error: errorSlice,
  },
});

export default store;
