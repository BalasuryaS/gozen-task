import React, { useState } from 'react';
import Parent from './parent';

const App = () => {
  
  const [data, setData] = useState('Initial Data');

  return (
    <div>
      <h1>App</h1>
      <parent data={data} setData={setData} />
    </div>
  );
};

export default App;
