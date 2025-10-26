import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="text-center space-y-2">
        <p className="font-semibold">© {new Date().getFullYear()} The Voyage Vault</p>
        <p className="text-sm italic">All your journeys in one vault</p>
      </div>
    </footer>
  );
}
