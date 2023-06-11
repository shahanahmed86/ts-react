import { createSlice } from '@reduxjs/toolkit';
import reducers from './reducer.theme';
import initialState from './state.theme';

const NAME = 'theme';

const themeSlice = createSlice({
  name: NAME,
  initialState,
  reducers,
});

export const themeActions = themeSlice.actions;

const themeReducer = themeSlice.reducer;
export default themeReducer;
