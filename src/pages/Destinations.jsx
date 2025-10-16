import React, { useState } from 'react'
import DestinationCloud from '../components/DestinationCloud'
import DestinationForm from '../components/DestinationForm'


const initial = [
{ name: 'Kyoto', country: 'Japan', description: 'Temples, gardens and cherry blossoms.', image: '/placeholder-1.jpg' },
{ name: 'Reykjavik', country: 'Iceland', description: 'Northern lights, hot springs and wild landscapes.', image: '/placeholder-2.jpg' },
]


export default function Destinations({ addToItinerary }){
const [list, setList] = useState(initial)


const handleCreate = (dest) => {
setList(prev => [dest, ...prev])
}


return (
<div className="space-y-6">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<h2 className="text-xl font-semibold mb-4">Destinations</h2>
<DestinationCloud list={list} onAdd={addToItinerary} />
</div>
<aside>
<h3 className="text-lg font-semibold mb-3">Add a Destination</h3>
<DestinationForm onCreate={handleCreate} />
</aside>
</div>
</div>
)
}
