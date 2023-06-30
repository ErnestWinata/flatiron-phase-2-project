import React from 'react';

const DestinationItem = ({ id, name, isChecked, onChange, image }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={name} className="destination-image" />}
      <input
        type="checkbox"
        id={id}
        name="destination"
        value={id}
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor={id}>
        <span className="plane-icon"></span>
        {name}
        </label>
    </div>
  );
};
export default DestinationItem;
