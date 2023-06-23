import React, { useState, useEffect } from 'react';
import DestinationItem from './DestinationItem';
import SelectedDestinations from './SelectedDestinations';

const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [newDestination, setNewDestination] = useState("");

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

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newDestinationData = {
      name: newDestination,
    };

    fetch('http://localhost:8000/destinations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newDestinationData),
    })
      .then((response) => response.json())
      .then((data) => {
        setDestinations((prevDestinations) => [
          ...prevDestinations,
          data,
        ]);
      });

    setNewDestination("");
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
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={newDestination}
          onChange={(event) => setNewDestination(event.target.value)}
          placeholder="Enter a new destination"
        />
        <button type="submit">Add Destination</button>
      </form>
      <SelectedDestinations
        selectedDestinations={selectedDestinations}
        destinations={destinations}
      />
    </div>
  );
};

export default DestinationList;



