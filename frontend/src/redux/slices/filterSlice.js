import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setAddWords: (state, action) => {
      return { ...state, title: action.payload };
    },
  },
});
export const { setAddWords } = filterSlice.actions;
export default filterSlice.reducer;
