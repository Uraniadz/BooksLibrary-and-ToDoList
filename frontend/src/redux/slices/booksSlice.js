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

const initialState = {
  books: [],
  isLoadingViaApi: false,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setAddBook: (state, action) => {
      state.books.push(action.payload);
    },
    setRandomBook: (state, action) => {
      state.books.push(action.payload);
    },
    setDeleteBook: (state, action) => {
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    },
    setToggleIsFavorite: (state, action) => {
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload
            ? { ...book, isFavorite: !book.isFavorite }
            : { ...book }
        ),
      };
    },
    setClearAllBooks: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      if (action?.payload?.title && action?.payload?.author) {
        state.books.push(action.payload);
        state.isLoadingViaApi = false;
      }
    });
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoadingViaApi = true;
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      state.isLoadingViaApi = false;
    });
  },
});

export const {
  setAddBook,
  setRandomBook,
  setDeleteBook,
  setToggleIsFavorite,
  setClearAllBooks,
  setIsLoadingViaApi,
} = booksSlice.actions;
export { fetchBooks };
export default booksSlice.reducer;
