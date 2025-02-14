"use client";
import React from "react";
import { motion } from "framer-motion";
// import { Barcode } from "lucide-react";
import { FaBarcode } from "react-icons/fa";

const TicketConfirmation = ({
  formData,
  onStep,
  ticketCount,
  selectedTicket,
}) => {
  console.log(ticketCount, selectedTicket);
  return (
    // <div className="w-[80%] lg:w-[60%] text-teal-50 min-h-screen bg-gray-900 flex items-center justify-center p-4">
    <div className="min-h-screen bg-gray-900 rounded-xl  text-white flex flex-col items-center py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-10"
      >
        <h1 className="text-3xl font-bold">Your Ticket is Booked!</h1>
        <p className="text-gray-400 mt-2">
          Check your email for a copy or you can{" "}
          <span className="font-bold text-white">download</span>
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center px-0"
      >
        <div className="w-full lg:w-[80%]  relative bg-gradient-to-b from-gray-900 to-teal-900 p-6 mt-6 rounded-2xl shadow-lg w-80 border border-gray-700">
          <div className=" h-6 w-full flex justify-between absolute -top-[1px] -left-[1px] right-0 px-[3px] z-20">
            <div className="border-r border-b border-teal-700 w-6 h-6 relative right-[3px]  rounded-br-[1rem]  bg-gray-900 "></div>
            <div className="border-l border-b border-teal-700 w-6 h-6 relative left-[5px] rounded-bl-[1rem]  bg-gray-900 "></div>
          </div>
          <div className=" flex flex-col justify-center items-center border border-teal-600 rounded-xl p-2 lg:p-6">
            <h2 className="text-2xl font-bold text-center">
              Techember Fest "25
            </h2>
            <p className="text-center text-gray-400 text-sm">
              📍 04 Humans Road, Ikoyi, Lagos
              <br />
              📅 March 15, 2025 | 7:00 PM
            </p>

            <div className="self-center flex justify-center mt-4 w-3/4 border-4 border-cyan-600 rounded-xl">
              <img
                src={formData.avatarUrl}
                alt="Profile"
                className="rounded-lg"
              />
            </div>

            <div className="mt-4 text-sm bg-teal-900 p-4 rounded-xl">
              <div className="w-auto grid grid-col-1 lg:grid-cols-2  items-center border border-teal-700 justify-start">
                <p className="border-r border-b border-teal-700 rounded-4 px-4 py-2">
                  <span className="text-gray-500">Name:</span> <br />{" "}
                  {formData.name}
                </p>
                <p className="border-l border-b border-teal-700 rounded-4 px-4 py-2 overflow-auto scrollbar-hide">
                  <span className="text-gray-500">Email:</span> <br />{" "}
                  {formData.email}
                </p>
                <p className="border-r border-b border-teal-700 rounded-4 px-4 py-2">
                  <span className="text-gray-500">Ticket Type:</span> <br />{" "}
                  {selectedTicket}
                </p>
                <p className="border-l border-b border-teal-700 rounded-4 px-4 py-2">
                  <span className="text-gray-500">Ticket for:</span> <br />{" "}
                  {ticketCount}
                </p>
              </div>
              <p className="text-gray-250 text-xs mt-2 border border-teal-700 rounded-4 px-4 py-2">
                <span className="text-gray-500">Special request?</span> <br />
                {formData.specialRequest}
              </p>
            </div>
          </div>
          <div className="w-full px-4 flex gap-1  absolute -bottom-[6px] z-20 left-0 right-0">
            <div className="w-8 h-2 rounded-sm  border-2 border-cyan-500"></div>
            <div className="w-8 h-2 rounded-sm  border-2 border-cyan-500"></div>
            <div className="w-8 h-2 rounded-sm  border-2 border-cyan-500"></div>
            <div className="w-8 h-2 rounded-sm  border-2 border-cyan-500"></div>
            <div className="w-8 h-2 rounded-sm  border-2 border-cyan-500"></div>
            <div className="w-8 h-2 rounded-sm  border-2 border-cyan-500"></div>
            <div className="w-8 h-2 rounded-sm  border-2 border-cyan-500"></div>
            <div className="w-8 h-2 rounded-sm  border-2 border-cyan-500"></div>
            <div className="w-8 h-2 rounded-sm  border-2 border-cyan-500"></div>
            <div className="w-8 h-2 rounded-sm  border-2 border-cyan-500"></div>
            <div className="w-8 h-2 rounded-sm  border-2 border-cyan-500"></div>
            <div className="w-8 h-2 rounded-sm  border-2 border-cyan-500"></div>
            <div className="w-8 h-2 rounded-sm  border-2 border-cyan-500"></div>
            <div className="w-8 h-2 rounded-sm  border-2 border-cyan-500"></div>
            <div className="w-8 h-2 rounded-sm  border-2 border-cyan-500"></div>
            <div className="w-8 h-2 rounded-sm  border-2 border-cyan-500"></div>
            <div className="w-8 h-2 rounded-sm  border-2 border-cyan-500"></div>
            <div className="w-8 h-2 rounded-sm  border-2 border-cyan-500"></div>
            <div className="w-8 h-2 rounded-sm  border-2 border-cyan-500"></div>
            <div className="w-8 h-2 rounded-sm  border-2 border-cyan-500"></div>
            <div className="w-8 h-2 rounded-sm  border-2 border-cyan-500"></div>
            <div className="w-8 h-2 rounded-sm  border-2 border-cyan-500"></div>
            <div className="w-8 h-2 rounded-sm  border-2 border-cyan-500"></div>
            <div className="w-8 h-2 rounded-sm  border-2 border-cyan-500"></div>
            <div className="w-8 h-2 rounded-sm  border-2 border-cyan-500"></div>
          </div>
          <div className=" h-10 w-[102.5%]  flex justify-between absolute -bottom-4 -left-1 right-0 px-[3px] z-20">
            <div className="w-10 h-12 bg-gray-900 z-30 relative -left-[40px]"></div>
            <div className=" w-full flex justify-between  absolute">
              <div className=" border border-teal-700 w-10 h-10 rounded-full  relative right-5 bg-gray-900  "></div>
              <div className="border border-teal-700 w-10 h-10 rounded-full relative left-3 bg-gray-900 "></div>
            </div>
            <div className="w-10 h-12 bg-gray-900 z-30 relative -right-[38px]"></div>
          </div>
        </div>
        <div className="relative w-full lg:w-[80%] bg-gradient-to-b from-gray-900 to-teal-900 border border-b-0 border-teal-700 px-6 py-8 z-0">
          <div className="flex justify-center mt-4 w-full border border-teal-700 p-2 rounded-xl">
            <FaBarcode className="h-16 w-full" />
            <FaBarcode className="h-16 w-full" />
            <FaBarcode className="h-16 w-full" />
            <FaBarcode className="h-16 w-full" />
            <FaBarcode className="h-16 w-full" />
            <FaBarcode className="h-16 w-full" />
          </div>

          <div className="flex justify-between text-xs mt-1 text-gray-400">
            <span>1</span>
            <span>234567</span>
            <span>891026</span>
          </div>
          <div className="border-t-0 border-teal-700 h-6 w-[102.5%]  flex justify-between absolute -bottom-0 -left-1 right-0 px-[3px] z-20">
            <div className=" border-r border-b-0 border-teal-700 w-6 h-6 rounded-tr-[2rem]  relative right-0 bg-gray-900 "></div>
            <div className="border-l border-teal-700 w-6 h-6 rounded-tl-[2rem] relative left-0  bg-gray-900 "></div>
          </div>
        </div>
      </motion.div>

      <div className="flex space-x-4 mt-6">
        <button
          onClick={() => onStep(1)}
          className="text-xs lg:text-md px-2 py-0 lg:px-6 lg:py-2  rounded-xl border border-teal-700 rounded-md text-gray-400 font-semibold hover:text-white hover:border-cyan-600 hover:bg-cyan-600 hover:text-gray-900"
        >
          Book Another Ticket
        </button>
        <button className=" text-xs lg:text-md px-6 py-2 rounded-xl bg-[#00bcd4] text-black rounded-md font-semibold hover:bg-[#00a3b4]">
          Download Ticket
        </button>
      </div>
    </div>
  );
};

export default TicketConfirmation;
