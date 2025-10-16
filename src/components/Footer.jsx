Import React from 'react'


export default function Footer(){
return (
<footer className="bg-white border-t mt-8">
<div className="container py-6 text-sm text-slate-600 flex justify-between">
<div>© {new Date().getFullYear()} The Voyage Vault</div>
<div>Built by Boipelo Kenya Moabi</div>
</div>
</footer>
)
}
