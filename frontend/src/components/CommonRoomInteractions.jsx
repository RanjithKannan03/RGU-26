"use client";

import { AnimatePresence } from "motion/react";
import React from "react";
import { useState } from "react";
import { redirect } from "next/navigation";
import Pic from "./Pic";
import Fuse from "./Fuse";

const CommonRoomInteractions = () => {
  const [openPic, setOpenPic] = useState(false);
  const [openFuse, setOpenFuse] = useState(false);

  return (
    <div className="w-full h-full bg-[#00000053] relative flex items-center justify-center">
      <button
        onClick={() => {
          setOpenPic(true);
        }}
        className="w-20 aspect-square z-30 absolute bottom-[45%] right-[20%] cursor-pointer"
      />

      <button
        onClick={() => {
          setOpenFuse(true);
        }}
        className="w-32 aspect-square z-30 absolute bottom-[55%] left-[12%] cursor-pointer"
      />

      {/* <button
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
      /> */}

      {/* <AnimatePresence>
        {openTub && <Tub setOpenTub={setOpenTub} />}
        {openToilet && <Toilet setOpenToilet={setOpenToilet} />}
        {openMirror && <Mirror setOpenMirror={setOpenMirror} />}
      </AnimatePresence> */}

      <AnimatePresence>
        {openPic && <Pic setOpenPic={setOpenPic} />}
        {openFuse && <Fuse setOpenFuse={setOpenFuse} />}
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

export default CommonRoomInteractions;
