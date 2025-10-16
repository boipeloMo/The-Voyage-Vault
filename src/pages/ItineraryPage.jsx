import React from 'react'
import ItineraryList from '../components/ItineraryList'


export default function ItineraryPage({ itinerary, removeFromItinerary }){
return (
<div>
<h2 className="text-xl font-semibold mb-4">Your Itinerary</h2>
<ItineraryList items={itinerary} onRemove={removeFromItinerary} />
</div>
)
}
