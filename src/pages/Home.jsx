import React from "react";
import { Link } from "react-router-dom";
import destinations from "../data/destinations";
import DestinationCloud from "../components/DestinationCloud";

export default function Home() {
  return (
    <div>
      <section className="mb-8">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">The Voyage Vault</h1>
            <p className="text-slate-700 mb-6">Plan and store your trips. Browse hand-picked destinations and build itineraries for your next big adventure.</p>
            <div className="flex gap-3">
              <Link to="/destinations" className="px-4 py-2 bg-vaultBlue text-white rounded">Explore Destinations</Link>
              <Link to="/itinerary" className="px-4 py-2 border rounded">View Itinerary</Link>
            </div>
          </div>
          <div>
            <div className="bg-gradient-to-tr from-accent/20 to-vaultBlue/5 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Featured Destinations</h3>
              <div className="grid grid-cols-2 gap-3">
                {destinations.slice(0,4).map(d => (
                  <div key={d.id} className="rounded overflow-hidden">
                    <img src={d.img} alt={d.name} className="h-28 w-full object-cover"/>
                    <div className="px-2 py-1 text-sm">{d.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Browse destinations</h2>
        <DestinationCloud items={destinations} onAdd={() => {}} />
      </section>
    </div>
  );
}
