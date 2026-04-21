import React, { useState } from "react";
import { CalendarDaysIcon, PencilSquareIcon, QueueListIcon } from "@heroicons/react/24/outline";
import { loadItinerary, saveItinerary } from "../utils/storage";

const prompts = [
  {
    title: "Travel dates",
    description: "Lock in your departure, return, and any must-hit dates.",
    icon: CalendarDaysIcon,
  },
  {
    title: "Daily plan",
    description: "Map activities, stays, and transfers in one running note.",
    icon: QueueListIcon,
  },
  {
    title: "Important reminders",
    description: "Capture bookings, budgets, and things to pack before you go.",
    icon: PencilSquareIcon,
  },
];

export default function Itinerary() {
  const [trip, setTrip] = useState(loadItinerary() || "");
  const [message, setMessage] = useState("");

  const handleSave = () => {
    saveItinerary(trip.trim());
    setMessage("Itinerary saved successfully.");
    window.setTimeout(() => setMessage(""), 2200);
  };

  return (
    <section className="page-shell pt-8">
      <div className="grid gap-6 md:gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <div className="section-card h-fit">
          <p className="eyebrow">
            Planner workspace
          </p>
          <h2 className="section-title mt-3">
            Keep your itinerary clear wherever you're planning from.
          </h2>
          <p className="body-copy mt-4">
            The original planner was functional, but it lacked layout structure on smaller screens.
            This version uses a two-panel arrangement that collapses cleanly on mobile and keeps
            the text area full-width and comfortable to edit.
          </p>

          <div className="mt-6 space-y-3">
            {prompts.map(({ title, description, icon: Icon }) => (
              <div key={title} className="glass-panel flex flex-col gap-4 p-4 md:flex-row md:items-start">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-400/15 text-sky-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-medium text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-card">
          <label
            htmlFor="trip-plan"
            className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 md:text-sm md:tracking-[0.3em]"
          >
            Your notes
          </label>
          <textarea
            id="trip-plan"
            value={trip}
            onChange={(event) => setTrip(event.target.value)}
            className="input-field mt-4 min-h-[18rem] md:min-h-[24rem]"
            placeholder={"Day 1: Arrive and settle in\nDay 2: Explore the city center\nDay 3: Beach day and sunset dinner"}
          />
          <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-400">
              Saved locally in this browser so your draft stays available between visits.
            </p>
            <button type="button" onClick={handleSave} className="btn-primary w-full md:w-auto">
              Save itinerary
            </button>
          </div>
          {message ? (
            <div className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100" aria-live="polite">
              {message}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
