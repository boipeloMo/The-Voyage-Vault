import React from 'react'
import DestinationCard from './DestinationCard'


export default function DestinationCloud({ items = [], onAdd }){
return (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{items.map(item => (
<DestinationCard key={item.id} dest={item} onAdd={onAdd} />
))}
</div>
)
}
