import React from 'react'


export default function Footer(){
return (
<footer className="bg-white border-t mt-8">
<div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
<div className="text-sm text-slate-600">&copy; {new Date().getFullYear()} The Voyage Vault — All your journeys in one vault</div>
<div className="text-sm text-slate-600 mt-2 md:mt-0">Built by Boipelo Kenya Moabi</div>
</div>
</footer>
)
}
