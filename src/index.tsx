import React from 'react';
import { Provider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Routes from './routes';
import { store } from './store';

const theme = {
  ...DefaultTheme,
  roundness: 10,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8e24aa',
    secondary: '#f50057',
    tertiary: '#ff3d00'
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </PaperProvider>
  );
};

export default App;
