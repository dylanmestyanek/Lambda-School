import React from 'react';

const AddedFeature = ({ feature, removeFeature }) => {
  return (
    <li>
      <button onClick={() => removeFeature(feature)} className="button">X</button>
      {feature.name}
    </li>
  );
};

export default AddedFeature;
