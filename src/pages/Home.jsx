import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import destinations from "../data/destinations";
import DestinationCloud from "../components/DestinationCloud";

export default function Home() {
  return (
    <div>
      <section className="mb-8">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-bold mb-4 text-vaultBlue">The Voyage Vault</h1>
            <p className="text-slate-700 mb-6">
              Plan and store your trips. Browse hand-picked destinations and build itineraries for your next big adventure.
            </p>
            <div className="flex gap-3">
              <Link
                to="/destinations"
                className="px-4 py-2 bg-vaultBlue text-white rounded shadow hover:bg-accent transition"
              >
                Explore Destinations
              </Link>
              <Link to="/itinerary" className="px-4 py-2 border rounded hover:bg-slate-100">
                View Itinerary
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <div className="bg-gradient-to-tr from-accent/20 to-vaultBlue/5 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Featured Destinations</h3>
              <div className="grid grid-cols-2 gap-3">
                {destinations.slice(0, 4).map((d) => (
                  <div key={d.id} className="rounded overflow-hidden">
                    <img src={d.img} alt={d.name} className="h-28 w-full object-cover" />
                    <div className="px-2 py-1 text-sm">{d.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Browse Destinations</h2>
        <DestinationCloud items={destinations} onAdd={() => {}} />
      </motion.section>
    </div>
  );
}
