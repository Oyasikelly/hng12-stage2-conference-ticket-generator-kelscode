"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Ticket = ({ ticket }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto mt-8 bg-indigo-700 p-6 rounded-xl shadow-lg text-center text-white"
    >
      <h2 className="text-3xl font-bold mb-2">KelsMusic Event Ticket 🎶</h2>

      <Image
        src={ticket.avatar}
        alt="Avatar"
        width={100}
        height={100}
        className="rounded-full mx-auto my-4 border-4 border-white"
      />

      <p className="text-xl font-semibold">{ticket.name}</p>
      <p className="text-sm italic mb-4">{ticket.email}</p>

      <div className="bg-purple-800 p-4 rounded-lg shadow-md">
        <p className="text-lg font-bold">Event: KelsMusic Live Concert</p>
        <p className="text-sm mt-1">Date: March 15, 2025</p>
        <p className="text-sm">Venue: Grand Arena, Lagos</p>
        <p className="text-sm">Gate Opens: 5 PM | Show Starts: 7 PM</p>
      </div>

      <div className="mt-4">
        <p className="text-sm">
          Ticket ID:{" "}
          <span className="font-bold">
            KM-{Math.floor(Math.random() * 100000)}
          </span>
        </p>
        <p className="text-xs italic text-gray-300 mt-2">
          Please present this ticket at the entrance for verification.
        </p>
      </div>
    </motion.div>
  );
};

export default Ticket;
