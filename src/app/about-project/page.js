"use client";
import React from "react";
import { motion } from "framer-motion";

const projectTickets = [
  {
    id: 1,
    type: "Open Source",
    price: "Free",
    benefits: [
      "Access to project repository",
      "Community support",
      "Basic documentation",
    ],
    bg: "bg-green-600",
  },
  {
    id: 2,
    type: "Premium",
    price: "$49",
    benefits: [
      "Priority support",
      "Advanced documentation",
      "Exclusive features",
      "Access to private discussions",
    ],
    bg: "bg-blue-500",
  },
  {
    id: 3,
    type: "Enterprise",
    price: "Custom Pricing",
    benefits: [
      "Full codebase access",
      "Dedicated team support",
      "Custom features & integrations",
      "Private deployment assistance",
    ],
    bg: "bg-purple-700",
  },
];

const ProjectTicketCard = ({ ticket }) => {
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
        {ticket.price === "Free" ? "Join Project" : "Buy Now"}
      </button>
    </motion.div>
  );
};

const ProjectsTicketSection = () => {
  return (
    <div className="py-16 px-6 bg-gray-900 text-center">
      <h2 className="text-4xl font-bold text-white">
        Choose Your Project Ticket
      </h2>
      <p className="text-gray-400 mt-4">
        Get access to exclusive project features!
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {projectTickets.map((ticket) => (
          <ProjectTicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsTicketSection;
