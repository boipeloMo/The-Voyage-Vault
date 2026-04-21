import React from "react";

export default function DestinationCard({ dest, onAdd }) {
  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/70 shadow-xl shadow-slate-950/30 transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-sky-950/30">
      <div className="relative overflow-hidden">
        <img
          className="block h-52 w-full max-w-full object-cover transition duration-500 group-hover:scale-105 md:h-56"
          src={dest.img}
          alt={dest.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-xs font-medium text-sky-200 backdrop-blur">
          {dest.days} day escape
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4 md:p-5">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:justify-between">
          <h3 className="text-xl font-semibold leading-tight text-white">{dest.name}</h3>
          <span className="max-w-full rounded-full bg-amber-400/15 px-3 py-1 text-sm font-medium text-amber-200">
            From ${dest.price}
          </span>
        </div>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{dest.short}</p>
        <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">Flexible ideas for beaches, culture, and scenic stays.</p>
          <button
            type="button"
            onClick={() => onAdd?.(dest)}
            className="btn-secondary w-full md:w-auto md:min-w-[9.5rem]"
          >
            Add to plan
          </button>
        </div>
      </div>
    </article>
  );
}
