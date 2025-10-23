import React from "react";

export default function DestinationCard({ dest, onAdd }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col">
      <img className="h-44 w-full object-cover" src={dest.img} alt={dest.name} />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold">{dest.name}</h3>
        <p className="text-sm text-slate-600 mt-2 flex-1">{dest.short}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-slate-700">From ${dest.price} · {dest.days} days</div>
          <button
            onClick={() => onAdd(dest)}
            className="px-3 py-1 bg-accent text-white rounded text-sm"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
