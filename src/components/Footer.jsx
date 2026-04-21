import React from "react";

export default function Footer() {
  return (
    <footer className="px-4 pb-6 pt-10 md:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-5 text-sm text-slate-300 shadow-xl shadow-slate-950/30 backdrop-blur md:grid-cols-[1.2fr_0.8fr] md:items-center md:rounded-[2rem] md:px-6 md:py-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
            The Voyage Vault
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
            A modern travel planning experience for saving ideas, building itineraries, and
            keeping every trip in one polished place.
          </p>
        </div>
        <div className="text-left md:text-right">
          <p className="text-base font-medium text-white">Ready across phone, tablet, and desktop.</p>
          <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-400">
            Copyright 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
