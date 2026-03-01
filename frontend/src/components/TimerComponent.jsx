"use client";

import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const TimerComponent = () => {
  const [timeLeft, setTimeLeft] = useState(600);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (timeLeft <= 0) {
      alert("You were killed by the demon... haha 👹");
      redirect("/");
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, mounted]);

  if (!mounted) return null; // Prevent SSR mismatch

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="absolute z-90 top-[5%] left-[10%]">
      <div
        className="px-10 py-5 bg-black border-2 border-red-700 
                shadow-[0_0_20px_rgba(255,0,0,0.8)] 
                animate-pulse rounded-md"
      >
        <p className="text-red-600 text-3xl font-bold tracking-widest font-mono">
          {formatTime(timeLeft)}
        </p>
      </div>
    </div>
  );
};

export default TimerComponent;
