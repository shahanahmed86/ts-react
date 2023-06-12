import { ThemeProvider } from 'styled-components';
import { useAppSelector } from '../../app/hook.store';

type ProviderProps = {
  children: JSX.Element;
};

function Provider({ children }: ProviderProps) {
  const theme = useAppSelector((state) => state.theme);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Provider;
