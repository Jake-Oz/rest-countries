"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Border_button = ({ name, code }: { name: string; code: string }) => {
  const router = useRouter();
  router.prefetch(`/detail/${code}`);
  return (
    <button
      className="flex justify-center items-center h-10 w-28 font-normal shadow-xl rounded"
      onClick={() => router.push(`/detail/${code}`)}
    >
      {name}
    </button>
  );
};

export default Border_button;
