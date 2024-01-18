"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="flex justify-center items-center gap-2 w-36 h-12 bg-white_DarkModeText_LightModeElements shadow-lg rounded-lg font-semibold text-xl my-20"
    >
      <BiArrowBack /> Back
    </button>
  );
};

export default BackButton;
