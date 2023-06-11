import { Action } from '../types.store';
import { TTheme } from './default';
import { Mode } from './default/colors.theme';

const reducers = {
  setMode: (state: TTheme, action: Action<Mode>) => {
    state.mode = action.payload;
  },
};

export default reducers;
