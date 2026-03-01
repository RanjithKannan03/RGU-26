import React from "react";
import Image from "next/image";
import CommonRoomInteractions from "@/components/CommonRoomInteractions";

const page = () => {
  return (
    <section className="h-screen w-screen">
      <div className="h-full w-full absolute top-0 -z-10 left-0">
        <Image
          fill
          src="/assets/common-room.png"
          alt="cover-image"
          className="object-contain"
        />
      </div>
      <CommonRoomInteractions />
    </section>
  );
};

export default page;
