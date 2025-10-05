export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-blue-100 to-white">
      <h1 className="text-4xl font-bold mb-4">Travel Planner</h1>
      <p className="text-lg mb-8">Plan your dream trips effortlessly.</p>
      <button className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition">
        Start Planning
      </button>
    </div>
  );
}
