import React from 'react'
import DestinationCloud from '../components/DestinationCloud'


const sample = [
{ name: 'Cape Town', country: 'South Africa', description: 'Iconic coast, Table Mountain and great food.', image: '/placeholder-1.jpg' },
{ name: 'Marrakech', country: 'Morocco', description: 'Historic medina, colorful markets and gardens.', image: '/placeholder-2.jpg' },
]


export default function Home({ addToItinerary }){
return (
<div>
<section className="py-8">
<div className="bg-gradient-to-r from-teal-50 to-white p-8 rounded-lg">
<h2 className="text-2xl font-bold">Welcome to The Voyage Vault</h2>
<p className="mt-2 text-slate-600">{`"All your journeys in one vault" — plan and collect your trips in one place.`}</p>
</div>
</section>


<section className="mt-8">
<h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
<DestinationCloud list={sample} onAdd={addToItinerary} />
</section>
</div>
)
}
