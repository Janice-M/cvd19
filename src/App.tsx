import React from 'react';
import AppProvider from './providers';
import AppNavigator from './navigation';

const App = (): React.ReactFragment => (
  <>
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  </>
);

export default App;
