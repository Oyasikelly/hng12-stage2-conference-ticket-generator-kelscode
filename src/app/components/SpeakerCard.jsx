import React from "react";
const SpeakerCard = ({ speaker }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300 ease-in-out">
      <img
        src={speaker.image}
        alt={speaker.name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-1">
        {speaker.name}
      </h3>
      <p className="text-purple-500 font-medium mb-2">{speaker.topic}</p>
      <p className="text-gray-600 text-sm">{speaker.bio}</p>
    </div>
  );
};

export default SpeakerCard;
