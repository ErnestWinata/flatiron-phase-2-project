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
      image: "https://img.freepik.com/free-vector/airplane-takeoff-poster_1284-9440.jpg"
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
  };

  return (
    <div>
    <h1>Travel Wish List</h1>
    <p className="description">
        The world is yours to explore. Which cities have been on your bucket list to visit?
        Here are some major destinations around the world that are sure to inspire any avid
        (or occasional) traveler. Check the boxes of the cities that you wish to visit;
        uncheck if you change your mind. If your dream destination is not on the list,
        simply add it in the box down below and hit the 'Add Destination' button.
      </p>
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
      </form>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={newDestination}
          onChange={(event) => setNewDestination(event.target.value)}
          placeholder="Enter a new destination"
          className="input-new-destination"
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



