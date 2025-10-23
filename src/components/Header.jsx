import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const loc = useLocation();
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-vaultBlue flex items-center justify-center text-white font-bold">
            VV
          </div>
          <div>
            <div className="text-lg font-semibold">The Voyage Vault</div>
            <div className="text-xs text-slate-500">All your journeys in one vault</div>
          </div>
        </Link>

        <nav className="flex items-center gap-4">
          <Link className={`hover:text-accent ${loc.pathname === '/' ? 'text-accent font-medium' : 'text-slate-700'}`} to="/">Home</Link>
          <Link className={`hover:text-accent ${loc.pathname.startsWith('/destinations') ? 'text-accent font-medium' : 'text-slate-700'}`} to="/destinations">Destinations</Link>
          <Link className={`hover:text-accent ${loc.pathname === '/itinerary' ? 'text-accent font-medium' : 'text-slate-700'}`} to="/itinerary">Itinerary</Link>
          <a className="ml-4 inline-block px-3 py-1 border rounded text-sm" href="#book">Book</a>
        </nav>
      </div>
    </header>
  );
}
