import React from "react";
import { FaCalendar, FaClock } from "react-icons/fa";
export default function EventCard({ event }) {
  return (
    <div className="flex gap-4 bg-purple-900/30 rounded-xl p-4 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all cursor-pointer">
      <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
          <p className="text-purple-200 text-sm">{event.description}</p>
        </div>

        <div className="flex items-center gap-4 text-sm text-purple-300">
          <div className="flex items-center gap-1">
            <FaCalendar className="w-4 h-4" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaClock className="w-4 h-4" />
            <span>{event.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
