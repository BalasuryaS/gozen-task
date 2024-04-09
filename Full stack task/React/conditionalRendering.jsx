import React, { useState } from 'react';

const ConditionalComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const toggleLogin = () => {
    setIsLoggedIn(prevState => !prevState);
  };

  return (
    <div>
      <h2>Conditional Rendering</h2>
      {isLoggedIn ? (
        <p>Welcome, User! You are logged in.</p>
      ) : (
        <p>Please log in to access your account.</p>
      )}

      
      {isLoggedIn && (
        <button onClick={toggleLogin}>Logout</button>
      )}

      {!isLoggedIn && (
        <button onClick={toggleLogin}>Login</button>
      )}
    </div>
  );
};

export default ConditionalComponent;
