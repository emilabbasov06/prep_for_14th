import { useState } from "react";

const Card = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [lovePercentage, setLovePercentage] = useState(null);
  const [message, setMessage] = useState("");

  const calculateLove = () => {
    if (!name1 || !name2) {
      setLovePercentage(null);
      setMessage("Bruh... at least enter some names first 💀");
      return;
    }

    const percentage = Math.floor(Math.random() * 101); // Random 0-100%
    setLovePercentage(percentage);

    // Dark humor responses based on the love percentage
    if (percentage < 20) {
      setMessage("💀 They say there's someone for everyone... But apparently, not for you...");
    } else if (percentage < 50) {
      setMessage("💀 Even WiFi signals connect better than you two...");
    } else if (percentage < 80) {
      setMessage("💖 Bro fuck off, is this some cringe shit? AGAIN?!...");
    } else {
      setMessage("💍 Let them have mercy on you!");
    }
  };

  return (
    <div className="bg-gray-800 shadow-xl rounded-2xl p-6 w-96 text-center">
      <h2 className="text-2xl font-semibold text-gray-300 mb-4">Enter Your Names</h2>

      <input
        type="text"
        placeholder="Your Name"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 mb-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
      />

      <input
        type="text"
        placeholder="Crush's Name"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
      />

      <button
        onClick={calculateLove}
        className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-lg transition"
      >
        Calculate Love 💘
      </button>

      {lovePercentage !== null && (
        <div className="mt-6 p-4 bg-gray-900 rounded-lg">
          <h3 className="text-xl font-semibold text-pink-400">{lovePercentage}% Compatibility</h3>
          <p className="text-gray-400 mt-2">{message}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
