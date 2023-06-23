import React from 'react';

const DestinationItem = ({ id, name, isChecked, onChange }) => {
  return (
    <div className="card">
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
