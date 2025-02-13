"use client";
import React from "react";
import { motion } from "framer-motion";

const tickets = [
  {
    id: 1,
    type: "Standard",
    price: "$50",
    benefits: ["General Admission", "1 Free Drink", "Live Concert Access"],
    bg: "bg-blue-500",
  },
  {
    id: 2,
    type: "VIP",
    price: "$120",
    benefits: [
      "Front Row Access",
      "Free Drinks & Snacks",
      "Meet & Greet with Artists",
    ],
    bg: "bg-purple-600",
  },
  {
    id: 3,
    type: "VVIP",
    price: "$250",
    benefits: [
      "Exclusive Lounge Access",
      "Unlimited Drinks & Food",
      "Backstage Pass",
      "Merchandise Gift Bag",
    ],
    bg: "bg-yellow-500",
  },
];

const TicketCard = ({ ticket }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`p-6 rounded-2xl text-white ${ticket.bg} shadow-lg`}
    >
      <h3 className="text-2xl font-bold">{ticket.type} Ticket</h3>
      <p className="text-lg font-semibold mt-2">{ticket.price}</p>
      <ul className="mt-4 space-y-2">
        {ticket.benefits.map((benefit, index) => (
          <li key={index} className="flex items-center gap-2">
            ✅ {benefit}
          </li>
        ))}
      </ul>
      <button className="mt-6 w-full bg-white text-black py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
        Buy Now
      </button>
    </motion.div>
  );
};

const TicketSection = () => {
  return (
    <div className="py-16 px-6 bg-gray-900 text-center">
      <h2 className="text-4xl font-bold text-white">Choose Your Ticket</h2>
      <p className="text-gray-400 mt-4">
        Get your ticket before they sell out!
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketSection;
