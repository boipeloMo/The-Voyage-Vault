import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/src/assets/hero.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <motion.div
        className="relative text-center text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-5xl font-extrabold mb-4">The Voyage Vault</h1>
        <p className="text-xl italic mb-6">All your journeys in one vault</p>
        <a
          href="/destinations"
          className="bg-yellow-400 text-blue-800 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500"
        >
          Explore Destinations
        </a>
      </motion.div>
    </section>
  );
}
