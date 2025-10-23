import React, { useEffect, useState } from "react";
import { loadItinerary, saveItinerary } from "../utils/storage";

export default function Itinerary() {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(loadItinerary());
  }, []);

  function removeItem(id) {
    const next = list.filter(i => i.id !== id);
    setList(next);
    saveItinerary(next);
  }

  function clearAll() {
    if (!confirm('Clear all saved itinerary items?')) return;
    setList([]);
    saveItinerary([]);
  }

  const total = list.reduce((s, it) => s + it.price, 0);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Your Itinerary</h1>
      {list.length === 0 ? (
        <div className="text-slate-600">No saved destinations yet. Browse <a className="text-accent" href="/destinations">Destinations</a> to add some.</div>
      ) : (
        <div className="space-y-4">
          {list.map(it => (
            <div key={it.id} className="flex items-center gap-4 bg-white p-4 rounded shadow-sm">
              <img src={it.img} alt={it.name} className="w-24 h-16 object-cover rounded" />
              <div className="flex-1">
                <div className="font-semibold">{it.name}</div>
                <div className="text-sm text-slate-600">{it.days} days · ${it.price}</div>
              </div>
              <button onClick={() => removeItem(it.id)} className="px-3 py-1 border rounded">Remove</button>
            </div>
          ))}
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">Total estimate: ${total}</div>
            <div className="flex gap-3">
              <button onClick={clearAll} className="px-4 py-2 border rounded">Clear</button>
              <button onClick={() => alert('Pretend checkout flow — implement as needed')} className="px-4 py-2 bg-vaultBlue text-white rounded">Book Trips</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
