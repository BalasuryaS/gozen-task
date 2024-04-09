import React from 'react';
import child from './child';

const ParentComponent = ({ data, setData }) => {
  return (
    <div>
      <h2>Parent Component</h2>
      <child data={data} setData={setData} />
    </div>
  );
};

export default ParentComponent;
