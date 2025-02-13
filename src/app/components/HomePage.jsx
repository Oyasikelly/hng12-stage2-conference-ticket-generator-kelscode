import React from "react";
import { FaArrowRight } from "react-icons/fa";
// import Navbar from "./Navbar";
import Countdown from "./Countdown";
import PerformerCard from "./PerformerCard";
import EventCard from "./EventCard";
import Link from "next/link";

const performers = [
  {
    id: 1,
    name: "Kate Middleton",
    genre: "Pop Rock",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    name: "Randall Walters",
    genre: "Hip Hop",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    name: "Lillian Chapman",
    genre: "R&B Soul",
    image:
      "https://images.unsplash.com/photo-1604514628550-37477afdf4e3?auto=format&fit=crop&q=80&w=1000",
  },
];

const events = [
  {
    id: 1,
    title: "Summer Vibes Festival",
    description: "Join us for an unforgettable night of music and dance",
    date: "Aug 20",
    time: "8:00 PM",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "Jazz Night Special",
    description: "Experience the smooth sounds of jazz under the stars",
    date: "Aug 25",
    time: "9:00 PM",
    image:
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=1000",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900">
      <div className="relative min-h-screen">
        {/* <Navbar /> */}

        {/* Hero Section */}
        <div className="relative h-screen flex items-center px-6">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center">
            <div className="absolute inset-0 bg-purple-900/70 backdrop-blur-sm" />
          </div>

          <div className="relative max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              MUSIC EVENT
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                GET THE BEAT
              </span>
            </h1>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl">
              Musical vibes expected every year where you can join the festival
              after you book through our site and secure your next seat now
            </p>
            <Link href="./generate-ticket">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all flex items-center gap-2">
                Get your Ticket
                <FaArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Countdown />
          </div>
        </div>

        {/* Performers Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Featured Performers
            </h2>
            <div className="flex justify-center gap-8 flex-wrap">
              {performers.map((performer) => (
                <PerformerCard key={performer.id} performer={performer} />
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-20 px-6 bg-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12">
              Upcoming Events
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
