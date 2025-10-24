const KEY = 'vv_itinerary_v1'


export function loadItinerary(){
try{
const raw = localStorage.getItem(KEY)
return raw ?
