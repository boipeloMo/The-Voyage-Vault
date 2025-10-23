import React, { useState } from "react";
import destinations from "../data/destinations";
import DestinationCloud from "../components/DestinationCloud";
import { loadItinerary, saveItinerary } from "../utils/storage";

export default function Destinations() {
  const [items] = useState(destinations);
  const [itinerary, setItinerary] = useState(loadItinerary());

  function handleAdd(dest) {
    const exists = itinerary.find(i => i.id === dest.id);
    const next = exists ? itinerary : [...itinerary, dest];
    setItinerary(next);
    saveItinerary(next);
    alert(`${dest.name} added to your itinerary`);
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Destinations</h1>
      <p className="text-sm text-slate-600 mb-6">Explore our curated destinations. Click "Add" to save to your itinerary.</p>

      <DestinationCloud items={items} onAdd={handleAdd} />
    </div>
  );
}
