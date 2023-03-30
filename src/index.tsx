import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';

import Routes from '~routes';
import {store} from '~store';
LogBox.ignoreAllLogs(true);
const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
