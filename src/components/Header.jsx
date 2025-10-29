import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold text-center md:text-left">The Voyage Vault</h1>
        <nav className="flex flex-wrap justify-center md:justify-end gap-3">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/destinations" className="hover:underline">Destinations</Link>
          <Link to="/itinerary" className="hover:underline">Itinerary</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
