import React from "react";

export default function PerformerCard({ performer }) {
  return (
    <div className="group relative w-64 aspect-square rounded-full overflow-hidden cursor-pointer">
      <img
        src={performer.image}
        alt={performer.name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-90" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
        <h3 className="text-xl font-bold text-white mb-1">{performer.name}</h3>
        <p className="text-purple-200 text-sm">{performer.genre}</p>
      </div>
    </div>
  );
}
