/* eslint-disable @typescript-eslint/no-explicit-any */

export type DeepPartial<T> = T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : Partial<T>;

export type GenericObject = {
  [key: string]: any;
};
