import React from 'react';

const SimpleButton = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
};

export default SimpleButton;
