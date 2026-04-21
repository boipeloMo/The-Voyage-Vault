import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const heroImage =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80";

export default function Hero() {
  return (
    <section className="page-shell pt-8">
      <div className="grid gap-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-slate-950/40 backdrop-blur md:rounded-[1.75rem] md:p-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-8 xl:p-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="eyebrow">
            Modern travel planning
          </p>
          <h2 className="display-title mt-4">
            Build smarter trips, save your ideas, and plan with confidence.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 md:text-lg">
            The Voyage Vault helps travelers explore standout destinations, compare getaway
            options, and shape their next itinerary in a polished workspace that feels great on
            any device.
          </p>
          <div className="mt-8 flex flex-col gap-3 md:flex-row">
            <Link to="/destinations" className="btn-primary w-full text-center md:w-auto">
              Explore Destinations
            </Link>
            <Link to="/itinerary" className="btn-secondary w-full text-center md:w-auto">
              Start Your Planner
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="glass-panel p-4">
              <p className="text-3xl font-semibold text-white">4+</p>
              <p className="mt-1 text-sm text-slate-300">Curated destinations ready to explore</p>
            </div>
            <div className="glass-panel p-4">
              <p className="text-3xl font-semibold text-white">1</p>
              <p className="mt-1 text-sm text-slate-300">Itinerary workspace saved in your browser</p>
            </div>
            <div className="glass-panel p-4">
              <p className="text-3xl font-semibold text-white">100%</p>
              <p className="mt-1 text-sm text-slate-300">Responsive from phone screens to desktop</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900"
        >
          <img
            src={heroImage}
            alt="Ocean-side destination with mountains and beach"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/35 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
            <div className="glass-panel max-w-sm p-4">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-sky-300 md:text-sm md:tracking-[0.25em]">
                Next stop
              </p>
              <p className="mt-2 text-xl font-semibold text-white">Your travel vault, reimagined</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Thoughtful spacing, fluid media, and a mobile-first layout make the experience feel
                polished enough for real users and strong enough for a portfolio showcase.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
