import { token } from '../../services/storage';
import { GenericObject } from '../../types/general.type';
import { Action } from '../types.store';
import { State, initialState } from './state.auth';

const reducers = {
  onAuth: (state: State, action: Action<GenericObject>) => {
    state.isAuthenticated = !!action.payload;
    state.user = action.payload;
  },
  onLogin: (state: State, action: Action<GenericObject>) => {
    state.isAuthenticated = !!action.payload;
    state.user = action.payload;
  },
  onLogout: (state: State) => {
    token.removeStorage();
    Object.assign(state, initialState);
  },
};

export default reducers;
