import React from 'react'
import DestinationCard from './DestinationCard'


export default function DestinationCloud({list, onAdd}){
return (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{list.map((d, i) => (
<DestinationCard key={i} dest={d} onAdd={onAdd} />
))}
</div>
)
}
