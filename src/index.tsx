import React from 'react';
import { LogBox } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

import Routes from '~routes';
import { store } from '~store';
import { Theme } from '~utils';
LogBox.ignoreAllLogs(true)
const App = () => {
  return (
    <PaperProvider theme={Theme}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </PaperProvider>
  );
};

export default App;
