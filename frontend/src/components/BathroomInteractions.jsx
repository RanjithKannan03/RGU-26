"use client";

import { AnimatePresence } from "motion/react";
import React from "react";
import { useState } from "react";
import Tub from "./Tub";
import Toilet from "./Toilet";
import Mirror from "./Mirror";
import { redirect } from "next/navigation";

const BathroomInteractions = () => {
  const [openTub, setOpenTub] = useState(false);
  const [openToilet, setOpenToilet] = useState(false);
  const [openMirror, setOpenMirror] = useState(false);
  return (
    <div className="w-full h-full bg-[#00000053] relative flex items-center justify-center">
      {/* <button
        onClick={() => {
          setOpenBook(true);
        }}
        className="w-40 rotate-[20deg] z-30 aspect-video absolute bottom-[30%] left-[33%] cursor-pointer"
      /> */}

      <button
        onClick={() => {
          setOpenTub(true);
        }}
        className="w-[20%] aspect-[16/6] z-30 absolute bottom-[20%] left-[25%] cursor-pointer"
      />

      <button
        onClick={() => {
          setOpenToilet(true);
        }}
        className="w-40 aspect-square  z-30 absolute bottom-[15%] left-[48%] cursor-pointer"
      />

      <button
        onClick={() => {
          setOpenMirror(true);
        }}
        className="w-60 aspect-square  z-30 absolute bottom-[45%] right-[20%] cursor-pointer"
      />

      <AnimatePresence>
        {openTub && <Tub setOpenTub={setOpenTub} />}
        {openToilet && <Toilet setOpenToilet={setOpenToilet} />}
        {openMirror && <Mirror setOpenMirror={setOpenMirror} />}
      </AnimatePresence>

      <button
        onClick={() => {
          redirect("/");
        }}
        className="bottom-[20%] left-[5%] text-white absolute cursor-pointer hover:font-bold text-2xl"
      >
        Go Back
      </button>
    </div>
  );
};

export default BathroomInteractions;
