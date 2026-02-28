"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const Safe = ({ setOpenSafe }) => {
  const CORRECT_CODE = "0126";

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const num1 = formData.get("num1");
    const num2 = formData.get("num2");
    const num3 = formData.get("num3");
    const num4 = formData.get("num4");

    const combined = `${num1}${num2}${num3}${num4}`;

    if (combined === CORRECT_CODE) {
      localStorage.setItem("completedPuzzle1", JSON.stringify(true));
      localStorage.setItem("isFuse", JSON.stringify(true));
      alert("Youe Opened the safe! There is a fuse inside.");
    } else {
      alert("Wrong code!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      className="w-[50%] h-[70%] z-40 relative shadow-2xl cursor-pointer drop-shadow-2xl flex items-center justify-center"
    >
      <Image fill src="/assets/safe.png" alt="safe" />

      <button
        className="w-20 aspect-square rounded-full absolute left-0 z-70 bottom-[45%]"
        onClick={() => setOpenSafe(false)}
      />

      <div className="w-full h-full bg-[#00000074] flex items-center relative z-60">
        <form
          onSubmit={handleSubmit}
          className="w-[90%] gap-10 flex flex-col items-center"
        >
          <div className="flex justify-evenly items-center w-full">
            <input
              name="num1"
              type="text"
              maxLength={1}
              className="aspect-square w-20 outline-1 focus:outline-2 text-white outline-white text-center text-3xl"
            />
            <input
              name="num2"
              type="text"
              maxLength={1}
              className="aspect-square w-20 outline-1 focus:outline-2 text-center text-3xl"
            />
            <input
              name="num3"
              type="text"
              maxLength={1}
              className="aspect-square w-20 outline-1 focus:outline-2 text-center text-3xl"
            />
            <input
              name="num4"
              type="text"
              maxLength={1}
              className="aspect-square w-20 outline-1 focus:outline-2 text-center text-3xl"
            />
          </div>

          <button
            type="submit"
            className="text-black text-3xl mt-10 cursor-pointer bg-white p-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Safe;
