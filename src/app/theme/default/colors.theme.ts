export const COLORS = {
  ui: {
    primary: {
      light: '#42a5f5',
      main: '#1976d2',
      dark: '#1565c0',
    },
    secondary: {
      light: '#ba68c8',
      main: '#9c27b0',
      dark: '#7b1fa2',
    },
    error: {
      light: '#ef5350',
      main: '#d32f2f',
      dark: '#c62828',
    },
    warning: {
      light: '#ff9800',
      main: '#ed6c02',
      dark: '#e65100',
    },
    light: {
      light: '#03a9f4',
      main: '#0288d1',
      dark: '#01579b',
    },
    success: {
      light: '#4caf50',
      main: '#2e7d32',
      dark: '#1b5e20',
    },
    disabled: '#DEDEDE',
    gray: '#ffffff66',
  },
  bg: {
    primary: '#FFFFFF',
    secondary: '#F1F1F1',
  },
  text: {
    primary: '#262626',
    secondary: '#757575',
    error: '#D0421B',
    success: '#138000',
  },
};

export type Mode = 'light' | 'dark';

export const MODE: Mode = 'light';
