import React, { useState, useEffect } from 'react';
import DestinationItem from './DestinationItem';
import SelectedDestinations from './SelectedDestinations';

const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);
  const [selectedDestinations, setSelectedDestinations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/destinations')
      .then((response) => response.json())
      .then((data) => setDestinations(data));
  }, []);

  const handleSelection = (event) => {
    const destinationId = parseInt(event.target.value, 10);
    const isSelected = event.target.checked;

    if (isSelected) {
      setSelectedDestinations((prevDestinations) => [
        ...prevDestinations,
        destinationId,
      ]);
    } else {
      setSelectedDestinations((prevDestinations) =>
        prevDestinations.filter((id) => id !== destinationId)
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submission logic
  };

  return (
    <div>
      <h1>Tourist Destinations</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid">
          {destinations.map((destination) => (
            <DestinationItem
              key={destination.id}
              id={destination.id}
              name={destination.name}
              image={destination.image}
              isChecked={selectedDestinations.includes(destination.id)}
              onChange={handleSelection}
            />
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
      <SelectedDestinations
        selectedDestinations={selectedDestinations}
        destinations={destinations}
      />
    </div>
  );
};

export default DestinationList;


