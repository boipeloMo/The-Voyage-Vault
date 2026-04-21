import React, { useState } from "react";
import DestinationCloud from "../components/DestinationCloud";
import destinations from "../data/destinations";

export default function Destinations() {
  const [selected, setSelected] = useState([]);

  const handleAdd = (destination) => {
    setSelected((current) =>
      current.some((item) => item.id === destination.id) ? current : [...current, destination]
    );
  };

  const totalBudget = selected.reduce((sum, item) => sum + item.price, 0);
  const totalDays = selected.reduce((sum, item) => sum + item.days, 0);

  return (
    <section className="page-shell pt-8">
      <div className="grid gap-6 md:gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.8fr)] lg:items-start">
        <div className="space-y-6">
          <div className="section-card">
            <p className="eyebrow">
              Destination library
            </p>
            <h2 className="section-title mt-3">
              Compare trips that balance scenery, culture, and pace.
            </h2>
            <p className="body-copy mt-4 max-w-3xl">
              The previous version relied on hard-coded local asset paths that would fail in a
              production Vite build. This refreshed library now uses deploy-safe public assets,
              responsive cards, and a clear layout that scales from one column on mobile to three
              on desktop.
            </p>
          </div>

          <DestinationCloud items={destinations} onAdd={handleAdd} />
        </div>

        <aside className="section-card h-fit lg:sticky lg:top-24" aria-label="Trip shortlist">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300 sm:tracking-[0.3em]">
            Trip shortlist
          </p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">
            Build your comparison set
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Add destinations you want to compare. This gives travelers a quick sense of cost and
            duration without needing a separate spreadsheet.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-1">
            <div className="glass-panel p-4">
              <p className="text-sm text-slate-400">Estimated budget</p>
              <p className="mt-2 text-3xl font-semibold text-white">${totalBudget || 0}</p>
            </div>
            <div className="glass-panel p-4">
              <p className="text-sm text-slate-400">Trip length</p>
              <p className="mt-2 text-3xl font-semibold text-white">{totalDays || 0} days</p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {selected.length ? (
              selected.map((item) => (
                <div
                  key={item.id}
                  className="min-w-0 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3"
                >
                  <p className="font-medium text-white">{item.name}</p>
                  <p className="mt-1 text-sm text-slate-400">
                    ${item.price} / {item.days} days
                  </p>
                </div>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-white/15 px-4 py-5 text-sm leading-6 text-slate-400">
                No destinations added yet. Tap "Add to plan" on mobile or desktop to start
                comparing options.
              </div>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
