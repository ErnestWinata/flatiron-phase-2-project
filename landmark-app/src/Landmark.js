import React from 'react';

const Landmark = ({ landmark }) => {
  return (
    <div>
      <h2>{landmark.name}</h2>
      <p>Country: {landmark.country}</p>
      {/* Add additional information about the landmark */}
    </div>
  );
};

export default Landmark;
