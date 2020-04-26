import React, { Component } from 'react';
import { Provider } from 'react-redux';
//import { Root } from 'native-base';

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/config/storeConfig';

import './src/config/reactotronConfig';
import Routes from './src/routes';



export default function App() {
  return (
    // <Root>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes/>
        </PersistGate>
      </Provider>
    // </Root>
  );
} 