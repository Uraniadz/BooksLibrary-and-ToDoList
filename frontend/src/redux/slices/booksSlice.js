import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import createBooksWithId from '../../utils/createBooksWithId';
import axios from 'axios';
import { setError } from './errorSlice';

const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (url, thunkApi) => {
    try {
      const res = await axios.get(url);
      return res.data;
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      if (action?.payload?.title && action?.payload?.author) {
        return [...state, createBooksWithId(action.payload)];
      }
    });
  },
});

export const { setAddBook, setRandomBook } = booksSlice.actions;
export { fetchBooks };
export default booksSlice.reducer;
