import React from 'react';

const DestinationItem = ({ id, name, isChecked, onChange, image }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={name} className="destination-image" />} {/* Add the image element */}
      <input
        type="checkbox"
        id={id}
        name="destination"
        value={id}
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor={id}>{name}</label>
    </div>
  );
};
export default DestinationItem;
