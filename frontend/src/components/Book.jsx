"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Book = ({ setOpenBook }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      className="w-[50%] h-[70%] z-40 relative shadow-2xl cursor-pointer drop-shadow-2xl"
    >
      <Image fill src="/assets/diary.png" alt="diary" />

      <button
        className="w-20 aspect-square rounded-full  absolute right-0 bottom-[45%]"
        onClick={() => {
          setOpenBook(false);
        }}
      />
    </motion.div>
  );
};

export default Book;
