import React from 'react'


export default function ItineraryList({items, onRemove}){
if(items.length === 0) return <div className="text-slate-600">No trips yet. Add a destination from Destinations page.</div>
return (
<div className="space-y-3">
{items.map((it, i) => (
<div key={i} className="bg-white p-3 rounded-lg shadow flex items-start gap-4">
<img src={it.image || '/placeholder-2.jpg'} className="w-20 h-20 object-cover rounded" />
<div className="flex-1">
<div className="font-semibold">{it.name} <span className="text-sm text-slate-500"> — {it.country}</span></div>
<div className="text-sm text-slate-500">{it.description}</div>
</div>
<div>
<button onClick={() => onRemove(i)} className="px-3 py-2 bg-red-500 text-white rounded">Remove</button>
</div>
</div>
))}
</div>
)
}
