"use client";

import React from "react";
import { useEffect } from "react";

const StateInitialiser = () => {
  useEffect(() => {
    if (localStorage.getItem("completedPuzzle1") === null) {
      localStorage.setItem("completedPuzzle1", "false");
    }

    if (localStorage.getItem("isFuse") === null) {
      localStorage.setItem("isFuse", "false");
    }

    if (localStorage.getItem("completedPuzzle2") === null) {
      localStorage.setItem("completedPuzzle2", "false");
    }

    if (localStorage.getItem("lightsOn") === null) {
      localStorage.setItem("lightsOn", "false");
    }
  }, []);
  return <div>StateInitialiser</div>;
};

export default StateInitialiser;
