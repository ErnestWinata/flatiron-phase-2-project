import React from 'react';

const SelectedDestinations = ({ selectedDestinations, destinations }) => {
  return (
    <div>
      <h2>Your travel wish list:</h2>
      <ul>
        {selectedDestinations.map((id) => (
          <li key={id}>{destinations.find((d) => d.id === id).name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedDestinations;
