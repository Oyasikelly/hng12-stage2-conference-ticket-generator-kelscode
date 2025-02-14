import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Countdown from "../components/Countdown";
import SpeakerCard from "../components/SpeakerCard";
import Link from "next/link";

const speakers = [
  {
    id: 1,
    name: "Dr. Emily Carter",
    topic: "AI & Machine Learning",
    image:
      "https://img.freepik.com/free-photo/beautiful-stylish-casual-girl-confidently-looking-camera-outdoor_574295-3080.jpg",
  },
  {
    id: 2,
    name: "Michael Johnson",
    topic: "Future of Web Development",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    name: "Sophia Martinez",
    topic: "Cybersecurity Trends 2025",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=1000",
  },
];

const sessions = [
  {
    id: 1,
    title: "Innovations in Tech",
    description: "Exploring groundbreaking technologies shaping the future.",
    date: "March 15",
    time: "10:00 AM",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "The Rise of Blockchain",
    description: "Delve into the transformative world of blockchain.",
    date: "March 16",
    time: "2:00 PM",
    image:
      "https://images.unsplash.com/photo-1526378722430-646c1c48e6d9?auto=format&fit=crop&q=80&w=1000",
  },
];

function TechEventPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="relative min-h-screen">
        {/* Hero Section */}
        <div className="relative h-screen flex items-center px-6">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm" />
          </div>

          <div className="relative max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              TECH CONFERENCE
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                FUTURE UNVEILED
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Join industry leaders and tech enthusiasts for an immersive
              experience exploring the future of technology.
            </p>
            <Link href="/">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full text-white font-semibold hover:from-blue-600 hover:to-green-600 transition-all flex items-center gap-2">
                Register Now
                <FaArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Countdown />
          </div>
        </div>

        {/* Speakers Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Keynote Speakers
            </h2>
            <div className="flex justify-center gap-8 flex-wrap">
              {speakers.map((speaker) => (
                <SpeakerCard key={speaker.id} speaker={speaker} />
              ))}
            </div>
          </div>
        </section>

        {/* Sessions Section */}
      </div>
    </div>
  );
}

export default TechEventPage;
