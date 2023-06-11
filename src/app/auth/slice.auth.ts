import { createSlice } from '@reduxjs/toolkit';
import reducers from './reducer.auth';
import { initialState } from './state.auth';

const NAME = 'auth';

const authSlice = createSlice({
  name: NAME,
  initialState,
  reducers,
});

export const authActions = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
