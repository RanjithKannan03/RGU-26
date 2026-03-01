import React, { useEffect, useState } from "react";

const COLORS = ["green", "yellow", "red"];

// 🔥 Fixed sequence (Green → Red → Yellow)
const FIXED_SEQUENCE = [0, 2, 1];

const YesFuse = () => {
  const [sequence] = useState(FIXED_SEQUENCE);
  const [userInput, setUserInput] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    playSequence(sequence);
  }, []);

  const playSequence = async (seq) => {
    setIsPlaying(true);

    for (let i = 0; i < seq.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setActiveIndex(seq[i]);
      await new Promise((resolve) => setTimeout(resolve, 400));
      setActiveIndex(null);
    }

    setIsPlaying(false);
  };

  const handleClick = (index) => {
    if (isPlaying) return;

    const newInput = [...userInput, index];
    setUserInput(newInput);

    if (sequence[newInput.length - 1] !== index) {
      setMessage("Wrong order. The fuse overloads.");
      setTimeout(() => {
        setUserInput([]);
        setMessage("");
        playSequence(sequence);
      }, 1500);
      return;
    }

    if (newInput.length === sequence.length) {
      setMessage("Correct. The fuse resets.");
      localStorage.setItem("lightsOn", "true");
    }
  };

  const getButtonStyle = (color, index) => {
    const base =
      "w-30 aspect-square rounded-full border-4 transition-all duration-200";

    const borderMap = {
      green: "border-green-400",
      yellow: "border-yellow-400",
      red: "border-red-400",
    };

    const activeMap = {
      green: "bg-green-400",
      yellow: "bg-yellow-400",
      red: "bg-red-400",
    };

    return `${base} ${
      activeIndex === index ? activeMap[color] : "bg-transparent"
    } ${borderMap[color]}`;
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <h1 className="text-2xl text-white mb-6">
        Press the buttons in the correct order to reset the fuse.
      </h1>

      <div className="flex-1 flex w-full items-center justify-evenly">
        {COLORS.map((color, index) => (
          <button
            key={color}
            className={getButtonStyle(color, index)}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      {message && (
        <p className="text-white mt-6 text-lg tracking-wide">{message}</p>
      )}
    </div>
  );
};

export default YesFuse;
