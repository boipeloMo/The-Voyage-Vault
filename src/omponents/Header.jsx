import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-blue-600 text-white p-4 flex justify-between">
    <h1 className="text-xl font-bold">Travel Planner</h1>
    <nav>
      <Link className="mr-4 hover:underline" to="/">Home</Link>
      <Link className="mr-4 hover:underline" to="/destinations">Destinations</Link>
      <Link className="hover:underline" to="/itinerary">Itinerary</Link>
    </nav>
  </header>
);

export default Header;
