import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GlobeAltIcon, MapIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Hero from "../components/Hero";
import DestinationCloud from "../components/DestinationCloud";
import destinations from "../data/destinations";

const highlights = [
  {
    title: "Discover with clarity",
    description: "Scan destination cards with pricing, duration, and stronger visual hierarchy at a glance.",
    icon: GlobeAltIcon,
  },
  {
    title: "Plan in one place",
    description: "Move from inspiration to itinerary without leaving the app or losing your draft notes.",
    icon: MapIcon,
  },
  {
    title: "Present a polished product",
    description: "Responsive layouts, fluid content, and refined UI details make the project feel launch-ready.",
    icon: SparklesIcon,
  },
];

export default function Home() {
  const [savedMessage, setSavedMessage] = useState("");

  const handleAdd = (destination) => {
    setSavedMessage(`${destination.name} is ready for your itinerary shortlist.`);
    window.setTimeout(() => setSavedMessage(""), 2200);
  };

  return (
    <div className="space-y-12 pb-4">
      <Hero />

      <section className="page-shell">
        <div className="grid gap-6 lg:grid-cols-3">
          {highlights.map(({ title, description, icon: Icon }) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="section-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/15 text-sky-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold leading-tight text-white md:text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="page-shell">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">
              Featured escapes
            </p>
            <h2 className="section-title mt-3">
              Compare destinations and start shaping your next journey.
            </h2>
          </div>
          <Link to="/destinations" className="btn-secondary w-full md:w-auto">
            View all destinations
          </Link>
        </div>

        {savedMessage ? (
          <div className="mb-6 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100" aria-live="polite">
            {savedMessage}
          </div>
        ) : null}

        <DestinationCloud items={destinations.slice(0, 3)} onAdd={handleAdd} />
      </section>
    </div>
  );
}
