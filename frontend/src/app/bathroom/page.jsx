"use client";

import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import BathroomInteractions from "@/components/BathroomInteractions";

export const page = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("lightsOn");
    console.log(stored);
    if (stored != null) {
      if (stored == "true") {
        setIsLightOn(true);
      } else {
        setIsLightOn(false);
      }
    }
  }, []);

  return (
    <section className="h-screen w-screen">
      <div className="h-full w-full absolute top-0 -z-10 left-0">
        {isLightOn ? (
          <Image
            fill
            src="/assets/bathroom-lights-on.png"
            alt="cover-image"
            className="object-contain"
            loading="eager"
          />
        ) : (
          <Image
            fill
            src="/assets/bathroom-lights-off.png"
            alt="cover-image"
            className="object-contain"
            loading="eager"
          />
        )}
      </div>
      {isLightOn && <BathroomInteractions />}
    </section>
  );
};

export default page;
