import React from "react";
import DestinationCard from "./DestinationCard";

export default function DestinationCloud({ items = [], onAdd }) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
      {items.map((item) => (
        <DestinationCard key={item.id} dest={item} onAdd={onAdd} />
      ))}
    </div>
  );
}
