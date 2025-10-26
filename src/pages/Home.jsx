import React from "react";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Plan Your Next Adventure</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover new destinations, organize itineraries, and make every trip unforgettable — all in one place.
        </p>
      </section>
    </>
  );
}
