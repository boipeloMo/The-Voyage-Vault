import React, { useState } from "react";
import { saveItinerary, loadItinerary } from "../utils/storage";

export default function Itinerary() {
  const [trip, setTrip] = useState(loadItinerary() || "");
  const [message, setMessage] = useState("");

  const handleSave = () => {
    saveItinerary(trip);
    setMessage("✅ Itinerary saved successfully!");
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <section className="py-12 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Your Travel Itinerary</h2>
      <textarea
        value={trip}
        onChange={(e) => setTrip(e.target.value)}
        className="w-full md:w-2/3 mx-auto h-48 p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
        placeholder="Write down your travel plans here..."
      />
      <div className="mt-4">
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Save Itinerary
        </button>
      </div>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </section>
  );
}
