import React from 'react';

const GrandChildComponent = ({ data, setData }) => {
  const handleChange = (e) => {
    setData(e.target.value); 
  };

  return (
    <div>
      <h4>Grandchild Component</h4>
      <input type="text" value={data} onChange={handleChange} />
    </div>
  );
};

export default GrandChildComponent;
