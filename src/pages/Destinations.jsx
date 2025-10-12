import React from 'react';
import DestinationCard from '../components/DestinationCard';

const sampleDestinations = [
  { name: 'Paris', description: 'City of lights', image: 'https://via.placeholder.com/300' },
  { name: 'Tokyo', description: 'Land of the rising sun', image: 'https://via.placeholder.com/300' },
  { name: 'New York', description: 'The Big Apple', image: 'https://via.placeholder.com/300' },
];

const Destinations = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {sampleDestinations.map((dest, index) => (
      <DestinationCard key={index} {...dest} />
    ))}
  </div>
);

export default Destinations;
