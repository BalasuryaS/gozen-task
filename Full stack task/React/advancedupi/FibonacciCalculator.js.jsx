// FibonacciCalculator.js
import React, { useState, useMemo } from 'react';

const FibonacciCalculator = ({ n }) => {
  const calculateFibonacci = (n) => {
    if (n <= 1) return n;
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
  };

  // Memoize the result of calculateFibonacci using useMemo
  const fibonacciResult = useMemo(() => calculateFibonacci(n), [n]);

  return (
    <div>
      <h2>Fibonacci Calculator</h2>
      <p>Fibonacci number at index {n}: {fibonacciResult}</p>
    </div>
  );
};

export default FibonacciCalculator;
