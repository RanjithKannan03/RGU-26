"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const doors = [
    { id: 1, left: 0.1, top: 0.5, route: "/bathroom" },
    { id: 2, left: 0.37, top: 0.5, route: "/bedroom" },
    { id: 3, left: 0.88, top: 0.5, route: "/common-room" },
  ];

  return (
    <div className="scene-wrapper">
      <div className="scene">
        {/* 背景图 */}
        <Image
          src="/assets/home.png"
          alt="home scene"
          fill
          priority
          sizes="100vw"
          className="scene-img"
        />

        {/* 热点按钮 */}
        {doors.map((door) => (
          <button
            key={door.id}
            onClick={() => router.push(door.route)}
            className="hotspot aspect-[8/16]"
            style={{
              left: `${door.left * 100}%`,
              top: `${door.top * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
