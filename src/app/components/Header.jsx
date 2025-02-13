"use client";

import React from "react";
import Link from "next/link";

import { FaTicketAlt } from "react-icons/fa";
import Navbar from "./Navbar";
import MobileNavbar from "./MoblieNavbar";

const Header = () => {
  return (
    <nav className="border border-teal-300 bg-gradient-to-r from-[#0D1B1E] to-[#0F2C2F] shadow-lg p-4 flex justify-between items-center rounded-xl mx-4 mt-4">
      <Link href="/">
        <div className="hollow-text flex items-center justify-center gap-2  font-bold px-3 py-1 rounded-lg shadow-md">
          <FaTicketAlt className="stroke-icon text-2xl" /> ticz
        </div>
      </Link>

      <div className="hidden xl:flex items-center gap-8">
        <Navbar />
      </div>

      {/* Mobile Nav */}
      <div className="xl:hidden">
        <MobileNavbar />
      </div>
    </nav>
  );
};

export default Header;
