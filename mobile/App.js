import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="ligth-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}


