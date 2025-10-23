const KEY = 'vv_itinerary_v1';

export function loadItinerary() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function saveItinerary(list) {
  try {
    localStorage.setItem(KEY, JSON.stringify(list));
  } catch (e) {}
}
