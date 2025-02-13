"use client";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "../../components/ui/sheet";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { FaTicketAlt } from "react-icons/fa";
export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false); // Initially closed

  const pathname = usePathname();
  const links = [
    { name: "event", path: "/event" },
    { name: "My Ticket", path: "/tickets" },
    { name: "About Project", path: "/about-project" },
  ];

  const handleToggleSheet = () => {
    setIsOpen((prev) => !prev); // Toggle open/close state
  };

  const handleCloseSheet = () => {
    setIsOpen(false); // Close the sheet when content is clicked
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries
          className="text-[32px] text-accent"
          onClick={handleToggleSheet}
        />
      </SheetTrigger>

      {/* Accessible Title */}
      <SheetTitle />

      <SheetContent
        className="flex flex-col"
        // aria-labelledby="mobile-nav-title"
        aria-describedby={undefined}
        onClick={handleCloseSheet}
      >
        {/* Logo */}
        <div className="mt-20 mb-20 text-center text-2xl">
          <Link href="/">
            <div className="hollow-text flex items-center justify-center gap-2  font-bold px-3 py-1 rounded-lg shadow-md">
              <FaTicketAlt className="stroke-icon text-2xl" /> ticz
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col justify-center items-center gap-8 w-auto">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname
                  ? "text-teal-700 border-b-2 border-accent"
                  : ""
              } capitalize font-medium hover:text-teal-700 transition-all w-fit`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
