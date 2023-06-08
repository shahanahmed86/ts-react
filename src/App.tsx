import { HashRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { THEME } from './infrastructure/theme';
import Home from './pages/Home.page';
import NotFound from './pages/NotFound.page';

export function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
