import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">The Voyage Vault</h1>
        <nav className="space-x-6">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/destinations" className="hover:text-yellow-300">Destinations</Link>
          <Link to="/itinerary" className="hover:text-yellow-300">Itinerary</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
