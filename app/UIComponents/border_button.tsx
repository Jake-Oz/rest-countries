"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Border_button = ({ name, code }: { name: string; code: string }) => {
  const router = useRouter();
  return (
    <button
      className="flex justify-center items-center py-2 px-4 last:mb-10 h-8 text-sm mobile:text-base mobile:h-12 min-w-32 font-normal shadow-full rounded dark:bg-darkBlue_DarkModeElements dark:text-white_DarkModeText_LightModeElements"
      onClick={() => router.push(`/detail/${code}`)}
    >
      {name}
    </button>
  );
};

export default Border_button;
