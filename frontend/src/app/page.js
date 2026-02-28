"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // 假设门的相对位置（百分比）
  const doors = [
    { id: 1, left: 0.06, top: 0.5 }, // 第一个门
    { id: 2, left: 0.3, top: 0.5 }, // 第二个门
    { id: 3, left: 0.7, top: 0.5 }, // 第三个门
  ];

  const handleClick = (id) => {
    alert(`点击了第 ${id} 个门`);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center ">
      <div className="relative w-full max-w-[1280px] aspect-video">
        {/* bg */}
        <Image
          src="/assets/home.png"
          alt="game background"
          fill
          className="rounded-md"
        />

        {/* BTNS BOORS */}
        {doors.map((door) => (
          <button
            key={door.id}
            onClick={() => handleClick(door.id)}
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
    </div>
  );
}