import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-6 py-12 max-w-6xl mx-auto">
      <div className="text-center md:text-left max-w-lg">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Explore Destinations
        </motion.h2>
        <p className="text-gray-700 text-lg mb-6">
          Discover new destinations, organize itineraries, and make every trip unforgettable — all in one place.
        </p>
        <motion.button
          className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition"
          whileHover={{ scale: 1.05 }}
        >
          Plan Your Next Adventure
        </motion.button>
      </div>

      <motion.img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="Beach destination"
        className="w-full md:w-1/2 rounded-2xl shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
    </section>
  );
}
