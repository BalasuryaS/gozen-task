import React, { useState, useEffect } from 'react';

const TimerComponent = () => {
   const [timer, setTimer] = useState(0);

 
  const incrementTimer = () => {
    setTimer(prevTimer => prevTimer + 1);
  };

 
  useEffect(() => {
    const intervalId = setInterval(incrementTimer, 1000);

     return () => {
      clearInterval(intervalId);
    };
  }, []); 

  return (
    <div>
      <h2>Timer: {timer} seconds</h2>
    </div>
  );
};

export default TimerComponent;
