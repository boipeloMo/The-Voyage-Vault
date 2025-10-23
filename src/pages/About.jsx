import React from "react";

export default function About() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About The Voyage Vault</h1>
      <p className="text-slate-700 mb-4">
        The Voyage Vault was built by <strong>Boipelo Kenya Moabi</strong> as a capstone project to showcase a modern, responsive travel planner application.
      </p>
      <p className="text-slate-700 mb-4">
        The app helps travelers browse curated destinations, plan itineraries, and store trips—all in one simple, beautiful vault.
      </p>
      <p className="text-slate-700">
        Technologies used: <em>React, Vite, Tailwind CSS, and Framer Motion</em>. Future versions could include user authentication, real-time booking, and cloud sync.
      </p>
    </div>
  );
}
