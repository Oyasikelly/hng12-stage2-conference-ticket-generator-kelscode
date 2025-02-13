"use client";
import { usePathname } from "next/navigation";

const Navlinks = [
  {
    name: "Event",
    pathname: "/event",
  },
  {
    name: "My Tickets",
    pathname: "/tickets",
  },
  {
    name: "About Project",
    pathname: "/about-project",
  },
];
import Link from "next/link";

import React from "react";
import { FaTicketAlt } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <ul className="flex items-center justify-center gap-4">
        {Navlinks.map((link) => (
          <li
            key={link.name}
            className=" text-teal-140 hover:text-teal-400 cursor-pointer"
          >
            <Link
              href={`${link.pathname}`}
              className={pathname == link.pathname ? "text-teal-400" : ""}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/tickets">
        <button className="bg-white text-teal-800 font-bold px-4 py-2 rounded-md shadow hover:bg-teal-400 hover:text-teal-140 transition-all">
          MY TICKETS →
        </button>
      </Link>
    </>
  );
};

export default Navbar;
