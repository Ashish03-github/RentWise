import React from 'react';
import RootNavigator from './navigation/RootNavigator';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { StatusBar } from './common/components';
const App = () => {
  return (
    <Provider store={store}>
      <StatusBar />
      <RootNavigator />
    </Provider>
  );
};

export default App;
