import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import createBooksWithId from '../../utils/createBooksWithId';
import axios from 'axios';
import { setError } from './errorSlice';

const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (url, thunkApi) => {
    try {
      const res = await axios.get(url);
      return createBooksWithId(res.data, 'ViaApi');
    } catch (error) {
      thunkApi.dispatch(
        setError(`Problem this network ${error.name} : ${error.message}`)
      );
      return thunkApi.rejectWithValue(error);
    }
  }
);

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setAddBook: (state, action) => {
      return [...state, action.payload];
    },
    setRandomBook: (state, action) => {
      state.push(action.payload);
    },
    setDeleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
    setToggleIsFavorite: (state, action) => {
      return state.map((book) => {
        if (book.id === action.payload) {
          return { ...book, isFavorite: !book.isFavorite };
        } else {
          return book;
        }
      });
    },
    setClearAllBooks: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      if (action?.payload?.title && action?.payload?.author) {
        return [...state, action.payload];
      }
    });
  },
});

export const {
  setAddBook,
  setRandomBook,
  setDeleteBook,
  setToggleIsFavorite,
  setClearAllBooks,
} = booksSlice.actions;
export { fetchBooks };
export default booksSlice.reducer;
