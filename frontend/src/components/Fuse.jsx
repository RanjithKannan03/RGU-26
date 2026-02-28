"use client";

import React from "react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import YesFuse from "./YesFuse";
import NoFuse from "./NoFuse";

const Fuse = ({ setOpenFuse }) => {
  const [isFuse, setIsFuse] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("isFuse");
    console.log(stored);
    if (stored != null) {
      if (stored == "true") {
        setIsFuse(true);
      } else {
        setIsFuse(false);
      }
    }
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      className="w-[50%] h-[70%] z-40 bg-[#00000094] relative shadow-4xl cursor-pointer drop-shadow-4xl"
    >
      <button
        className="w-14 aspect-square rounded-full bg-white text-4xl  absolute right-0 top-0"
        onClick={() => {
          setOpenFuse(false);
        }}
      >
        X
      </button>

      <div className="h-[90%] w-full absolute flex items-center justify-center bottom-0">
        {isFuse ? <YesFuse /> : <NoFuse />}
      </div>
    </motion.div>
  );
};

export default Fuse;
