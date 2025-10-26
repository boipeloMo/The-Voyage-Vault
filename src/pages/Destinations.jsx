import React from "react";

const destinations = [
  { name: "Paris", image: "/src/assets/destinations.jpg", desc: "City of lights and romance." },
  { name: "Tokyo", image: "/src/assets/destinations.jpg", desc: "Vibrant city of technology and tradition." },
  { name: "Cape Town", image: "/src/assets/destinations.jpg", desc: "Where oceans meet the mountains." },
];

export default function Destinations() {
  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Top Destinations</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {destinations.map((dest, index) => (
          <div key={index} className="bg-white rounded-2xl shadow hover:shadow-lg transition">
            <img
              src={dest.image}
              alt={dest.name}
              className="rounded-t-2xl h-48 w-full object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-2">{dest.name}</h3>
              <p className="text-gray-600">{dest.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
