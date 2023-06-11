import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import { persistor, store } from './app/store';
import Navigator from './infrastructure/navigators';
import ThemeProvider from './infrastructure/theme';

export function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <Navigator />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
