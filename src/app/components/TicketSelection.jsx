"use client";

import React, { useState } from "react";

const TicketSelection = ({
  onStep,
  ticketCount,
  setTicketCount,
  selectedTicket,
  setSelectedTicket,
}) => {
  const ticketTypes = [
    { type: "Free", access: "REGULAR ACCESS", price: 0, available: "20/52" },
    {
      type: "VIP ACCESS",
      access: "VIP ACCESS",
      price: 150,
      available: "20/52",
    },
    {
      type: "VVIP ACCESS",
      access: "VVIP ACCESS",
      price: 150,
      available: "20/52",
    },
  ];

  return (
    <div className=" border border-[#0f3d49] w-full max-w-md bg-[#11262b] text-teal-50 p-6 rounded-2xl shadow-lg">
      <div className="bg-gradient-to-b from-[#0f2c33] to-[#0d1b1e] border  border-[#0f3d49] p-4 rounded-xl text-center mb-4">
        <h3 className="text-3xl mb-4 font-bold text-white">
          Techember Fest "25
        </h3>
        <p>
          Join us for an unforgettable experience at [Event Name]! Secure your
          spot now.
        </p>
        <p className="mt-2 text-sm">
          📍 [Event Location] | March 15, 2025 | 7:00 PM
        </p>
      </div>
      <div className="border-b border-[#0f3d49] w-full max-w-md bg-[#11262b] mb-4"></div>

      <div className="mb-4">
        <p className="mb-2 font-medium">Select Ticket Type:</p>
        <div className="flex gap-2  flex-col lg:flex-row">
          {ticketTypes.map((ticket) => (
            <div
              key={ticket.type}
              className={`p-4 rounded-lg border cursor-pointer transition duration-300 ${
                selectedTicket === ticket.type
                  ? "bg-teal-900  border-[#0f3d49]  text-white"
                  : "border-[#0f3d49]"
              }`}
              onClick={() => setSelectedTicket(ticket.type)}
            >
              <p className="font-bold text-lg">
                {ticket.price === 0 ? "Free" : `$${ticket.price}`}
              </p>
              <p className="text-sm">{ticket.access}</p>
              <p className="text-xs">{ticket.available}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Number of Tickets</label>
        <select
          className="w-full p-2 rounded-lg bg-[#0d1b1e] border border-[#0f3d49] focus:outline-none"
          value={ticketCount}
          onChange={(e) => setTicketCount(e.target.value)}
        >
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-between">
        <button className="text-teal-400 text-xs lg:text-md  w-1/2 mr-2 p-2 rounded-xl bg-[#0d1b1e] border border-[#0f3d49]  hover:bg-teal-500 transition duration-300">
          Cancel
        </button>
        <button
          onClick={() => onStep(2)}
          className="w-1/2 ml-2 p-2 text-xs lg:text-md rounded-xl bg-teal-500 text-white hover:bg-teal-400 transition duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TicketSelection;
