import { GenericObject } from '../../types/general.type';

export type State = {
  isAuthenticated: boolean;
  user: GenericObject | null | undefined;
};

export const initialState: State = {
  isAuthenticated: false,
  user: null,
};
