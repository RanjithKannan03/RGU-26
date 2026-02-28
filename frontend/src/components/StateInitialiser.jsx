"use client";

import React from "react";
import { useEffect } from "react";

const StateInitialiser = ({ children }) => {
  useEffect(() => {
    localStorage.clear();
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
      localStorage.setItem("lightsOn", "true");
    }
  }, []);
  return <div>{children}</div>;
};

export default StateInitialiser;
