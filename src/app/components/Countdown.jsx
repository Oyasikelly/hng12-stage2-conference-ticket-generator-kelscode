"use client";
import React, { useState, useEffect } from "react";

function TimeBox({ value, label }) {
  return (
    <div className="flex flex-col items-center justify-center w-20 h-20 bg-purple-900/50 rounded-lg backdrop-blur-sm border border-purple-500/30">
      <span className="text-2xl font-bold text-white">{value}</span>
      <span className="text-xs text-purple-200">{label}</span>
    </div>
  );
}

export default function Countdown() {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-12-31").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 mt-8">
      <TimeBox value={timeLeft.days} label="DAYS" />
      <TimeBox value={timeLeft.hours} label="HOURS" />
      <TimeBox value={timeLeft.minutes} label="MINUTES" />
      <TimeBox value={timeLeft.seconds} label="SECONDS" />
    </div>
  );
}
