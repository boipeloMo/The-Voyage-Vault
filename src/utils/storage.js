export const saveItinerary = (data) => {
  localStorage.setItem("voyage_itinerary", JSON.stringify(data));
};

export const loadItinerary = () => {
  const saved = localStorage.getItem("voyage_itinerary");
  return saved ? JSON.parse(saved) : "";
};
