"use client";

import TicketConfirmation from "./components/TicketConfirmation";

import { useState, useEffect } from "react";
import TicketSelection from "./components/TicketSelection";
import AttendeeDetails from "./components/AttendeeDetails";

export default function Home() {
  const [step, setStep] = useState(1);
  const [selectedTicket, setSelectedTicket] = useState("Free");
  const [ticketCount, setTicketCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("ticketFormData");
      return saved
        ? JSON.parse(saved)
        : {
            ticketType: "regular",
            quantity: 1,
            name: "",
            email: "",
            avatarUrl: "",
            specialRequest: "",
          };
    }
    return {
      ticketType: "regular",
      quantity: 1,
      name: "",
      email: "",
      avatarUrl: "",
      specialRequest: "",
    };
  });

  useEffect(() => {
    localStorage.setItem("ticketFormData", JSON.stringify(formData));
  }, [formData]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "hng-user-upload");

    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dh29ri46d/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      console.log(data);
      setFormData((prev) => ({ ...prev, avatarUrl: data.secure_url }));
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <TicketSelection
            ticketCount={ticketCount}
            setTicketCount={setTicketCount}
            onStep={setStep}
            selectedTicket={selectedTicket}
            setSelectedTicket={setSelectedTicket}
          />
        );
      case 2:
        return (
          <AttendeeDetails
            onStep={setStep}
            handleImageUpload={handleImageUpload}
            setFormData={setFormData}
            formData={formData}
            isLoading={isLoading}
          />
        );
      case 3:
        return (
          <TicketConfirmation
            formData={formData}
            onStep={setStep}
            ticketCount={ticketCount}
            selectedTicket={selectedTicket}
          />
        );
    }
  };

  return (
    <main className="min-h-screen p-4">
      <div className=" max-w-2xl mx-auto mt-16 glass-card p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="h-1 flex-1 bg-[rgba(56,182,194,0.2)]">
            <div
              className="h-full bg-[#38B6C2]"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
          <div className="ml-4 text-sm text-gray-400">Step {step}/3</div>
        </div>

        <div className="flex flex-col justify-center items-center">
          {renderStep()}
        </div>
      </div>
    </main>
  );
}
