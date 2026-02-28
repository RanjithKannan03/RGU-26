"use client";

import React, { useState } from "react";
import Book from "./Book";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Safe from "./Safe";

function BedroomInteractions() {
  const [openBook, setOpenBook] = useState(false);
  const [openSafe, setOpenSafe] = useState(false);

  return (
    <div className="w-full h-full bg-[#00000053] relative flex items-center justify-center">
      <button
        onClick={() => {
          setOpenBook(true);
        }}
        className="w-40 rotate-[20deg] z-30 aspect-video absolute bottom-[30%] left-[33%] cursor-pointer"
      />

      <button
        onClick={() => {
          setOpenSafe(true);
        }}
        className="w-50 aspect-square z-30 absolute bottom-[30%] right-[5%] cursor-pointer"
      />

      {/* {openBook && <Book setOpenBook={setOpenBook} />} */}
      <AnimatePresence>
        {openBook && <Book setOpenBook={setOpenBook} />}
      </AnimatePresence>

      <AnimatePresence>
        {openSafe && <Safe setOpenSafe={setOpenSafe} />}
      </AnimatePresence>
    </div>
  );
}

export default BedroomInteractions;
