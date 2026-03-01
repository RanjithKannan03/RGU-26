"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Toilet = ({ setOpenToilet }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      className="w-[50%] h-[70%] z-40 relative shadow-2xl cursor-pointer drop-shadow-2xl"
    >
      <Image fill src="/assets/toilet.png" alt="toilet" />

      <button
        className="w-14 aspect-square rounded-full bg-white text-4xl  absolute right-0 top-0"
        onClick={() => {
          setOpenToilet(false);
        }}
      >
        X
      </button>
    </motion.div>
  );
};

export default Toilet;
