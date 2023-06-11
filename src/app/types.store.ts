export type Action<T> = {
  payload: T;
  type: string;
};
