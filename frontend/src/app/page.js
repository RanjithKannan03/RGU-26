"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  // 门的相对位置和目标路由
  const doors = [
    { id: 1, left: 0.06, top: 0.5, route: "/bathroom" },
    { id: 2, left: 0.3, top: 0.5, route: "/bedroom" },
    { id: 3, left: 0.8, top: 0.5, route: "/common-room" },
  ];

  const handleClick = (route) => {
    router.push(route); // 跳转到对应路由
  };

  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <div className="relative w-full max-w-[1280px] aspect-video">
        {/* 背景图 */}
        <Image
          src="/assets/home.png"
          alt="game background"
          fill
          className="rounded-md"
        />

        {/* 门按钮 */}
        {doors.map((door) => (
          <button
            key={door.id}
            onClick={() => handleClick(door.route)}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red-500 bg-opacity-50 rounded-full hover:bg-opacity-80 transition"
            style={{
              left: `${door.left * 100}%`,
              top: `${door.top * 100}%`,
            }}
          >
            {/* 可选：图标或文字 */}
          </button>
        ))}
      </div>
    </section>
  );
}
