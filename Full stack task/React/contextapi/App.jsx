import React from 'react';
import { AppProvider } from './AppContext';
import Counter from './Counter';

const App = () => {
  return (
    <AppProvider>
      <div>
        <h1>Global State Management with Context API</h1>
        <Counter />
      </div>
    </AppProvider>
  );
};

export default App;
