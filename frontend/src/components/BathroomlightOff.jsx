import React from "react";
import { redirect } from "next/navigation";

const BathroomlightOff = () => {
  return (
    <div className="w-full h-full bg-[#00000053] relative flex items-center justify-center">
      <button
        onClick={() => {
          redirect("/");
        }}
        className="bottom-[20%] left-[5%] z-30 text-white absolute cursor-pointer hover:font-bold text-2xl"
      >
        Go Back
      </button>
    </div>
  );
};

export default BathroomlightOff;
