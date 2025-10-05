export default function Dashboard() {
  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">My Trips</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg">+ New Trip</button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded-xl p-4 shadow hover:shadow-md transition">
          <h3 className="font-medium">Paris Getaway</h3>
          <p className="text-sm text-gray-500">3–7 May 2025</p>
        </div>
        {/* Add more trip cards */}
      </div>
    </div>
  );
}
