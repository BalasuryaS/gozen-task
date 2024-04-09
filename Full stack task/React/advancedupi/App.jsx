// App.js
import React, { useState } from 'react';
import FibonacciCalculator from './FibonacciCalculator';

const App = () => {
  const [fibIndex, setFibIndex] = useState(10);

  const handleChange = (e) => {
    setFibIndex(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <h1>Fibonacci Sequence Calculator</h1>
      <input type="number" value={fibIndex} onChange={handleChange} />
      <FibonacciCalculator n={fibIndex} />
    </div>
  );
};

export default App;
