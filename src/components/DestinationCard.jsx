import React from 'react';

const DestinationCard = ({ name, description, image }) => (
  <div className="border rounded-lg shadow-md overflow-hidden p-4 max-w-sm">
    <img className="w-full h-48 object-cover" src={image} alt={name} />
    <h2 className="font-bold text-lg mt-2">{name}</h2>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default DestinationCard;
