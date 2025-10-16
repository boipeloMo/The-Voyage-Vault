import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Header(){
return (
<header className="bg-white shadow">
<div className="container flex items-center justify-between py-4">
<Link to="/" className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold">VV</div>
<div>
<h1 className="text-lg font-semibold">The Voyage Vault</h1>
<p className="text-xs text-slate-500">All your journeys in one vault — Boipelo Kenya Moabi</p>
</div>
</Link>


<nav className="flex items-center gap-4">
<NavLink to="/" className={({isActive}) => isActive ? 'text-teal-600 font-semibold' : 'text-slate-700'}>Home</NavLink>
<NavLink to="/destinations" className={({isActive}) => isActive ? 'text-teal-600 font-semibold' : 'text-slate-700'}>Destinations</NavLink>
<NavLink to="/itinerary" className={({isActive}) => isActive ? 'text-teal-600 font-semibold' : 'text-slate-700'}>Itinerary</NavLink>
</nav>
</div>
</header>
)
}
