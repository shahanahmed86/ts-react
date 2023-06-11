import { authActions } from './slice.auth';

export { default as authReducer } from './slice.auth';

export const allAuthActions = {
  ...authActions,
};
