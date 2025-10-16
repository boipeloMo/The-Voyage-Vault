import React, { useState } from 'react'
import { validateDestination } from '../utils/validators'


export default function DestinationForm({onCreate}){
const [form, setForm] = useState({ name: '', country: '', description: '', image: '' })
const [errors, setErrors] = useState({})


const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value})


const handleSubmit = (e) =>{
e.preventDefault()
const errs = validateDestination(form)
setErrors(errs)
if(Object.keys(errs).length === 0){
onCreate(form)
setForm({ name: '', country: '', description: '', image: '' })
}
}


return (
<form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow">
<div className="grid grid-cols-1 gap-3">
<div>
<label className="text-sm">Name</label>
<input name="name" value={form.name} onChange={handleChange} className="mt-1 block w-full rounded border p-2" />
{errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
</div>
<div>
<label className="text-sm">Country</label>
<input name="country" value={form.country} onChange={handleChange} className="mt-1 block w-full rounded border p-2" />
{errors.country && <p className="text-xs text-red-600 mt-1">{errors.country}</p>}
</div>
<div>
<label className="text-sm">Description</label>
<textarea name="description" value={form.description} onChange={handleChange} className="mt-1 block w-full rounded border p-2" />
{errors.description && <p className="text-xs text-red-600 mt-1">{errors.description}</p>}
</div>
<div>
<label className="text-sm">Image URL (optional)</label>
<input name="image" value={form.image} onChange={handleChange} className="mt-1 block w-full rounded border p-2" />
</div>
<div className="flex justify-end">
<button type="submit" className="px-4 py-2 bg-teal-500 text-white rounded-md">Add Destination</button>
</div>
</div>
</form>
)
}
