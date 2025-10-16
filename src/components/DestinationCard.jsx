import React from 'react'


export default function DestinationCard({dest, onAdd}){
return (
<div className="bg-white rounded-lg shadow p-4 flex flex-col">
<img src={dest.image || '/placeholder-1.jpg'} alt={dest.name} className="h-40 object-cover rounded-md mb-3" />
<h3 className="text-lg font-semibold">{dest.name}</h3>
<p className="text-sm text-slate-600 mt-1">{dest.country}</p>
<p className="flex-1 text-sm text-slate-500 mt-2">{dest.description}</p>
<div className="mt-3 flex gap-2">
<button onClick={() => onAdd(dest)} className="px-3 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600">Add to itinerary</button>
</div>
</div>
)
}
