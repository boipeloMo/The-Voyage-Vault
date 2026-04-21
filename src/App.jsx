import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Itinerary from "./pages/Itinerary";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen overflow-x-clip bg-slate-950 text-slate-100">
        <div className="relative isolate flex min-h-screen flex-col overflow-x-clip overflow-y-visible">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[30rem] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_55%),radial-gradient(circle_at_20%_20%,_rgba(251,191,36,0.16),_transparent_30%),linear-gradient(180deg,_rgba(15,23,42,1)_0%,_rgba(2,6,23,1)_100%)]" />
          <Header />
          <main className="flex-1 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/itinerary" element={<Itinerary />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
