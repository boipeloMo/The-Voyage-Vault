import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import ItineraryPage from './pages/ItineraryPage'


export default function App(){
// top-level state for chosen itinerary items
const [itinerary, setItinerary] = useState([])


const addToItinerary = (destination) => {
setItinerary(prev => [...prev, destination])
}


const removeFromItinerary = (index) => {
setItinerary(prev => prev.filter((_, i) => i !== index))
}


return (
<div className="flex flex-col min-h-screen">
<Header />
<main className="flex-1 py-8 bg-slate-50">
<div className="container">
<Routes>
<Route path="/" element={<Home addToItinerary={addToItinerary} />} />
<Route path="/destinations" element={<Destinations addToItinerary={addToItinerary} />} />
<Route path="/itinerary" element={<ItineraryPage itinerary={itinerary} removeFromItinerary={removeFromItinerary} />} />
</Routes>
</div>
</main>
<Footer />
</div>
)
}
