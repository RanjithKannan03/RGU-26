import BedroomInteractions from "@/components/BedroomInteractions";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="h-screen w-screen">
      <div className="h-full w-full absolute top-0 -z-10 left-0">
        <Image
          fill
          src="/assets/bedroom.png"
          alt="cover-image"
          className="object-contain"
        />
      </div>
      <BedroomInteractions />
    </section>
  );
};

export default page;
