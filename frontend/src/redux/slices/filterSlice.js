import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  author: '',
  onlyFavorite: false,
};
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setAddWords: (state, action) => {
      return { ...state, title: action.payload };
    },
    setAddAuthor: (state, action) => {
      return { ...state, author: action.payload };
    },
    setOnlyFavorite: (state) => {
      return { ...state, onlyFavorite: !state.onlyFavorite };
    },
    setClearAllFilters: () => {
      return initialState;
    },
  },
});
export const {
  setAddWords,
  setAddAuthor,
  setOnlyFavorite,
  setClearAllFilters,
} = filterSlice.actions;
export default filterSlice.reducer;
