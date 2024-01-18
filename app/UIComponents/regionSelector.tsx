"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const RegionSelector = () => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [isSelected, setIsSelected] = useState(false);

  const handleSelection = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(event.currentTarget.name);
    const params = new URLSearchParams(searchParams);
    if (event) {
      params.set("region", event.currentTarget.name);
      params.delete("country");
    } else {
      params.delete("region");
    }
    replace(`${pathname}?${params.toString()}`);
    setIsSelected(!isSelected);
  };

  const items = regions.map((region) => {
    return (
      <button
        key={region}
        name={region}
        onClick={handleSelection}
        className="flex items-center h-8 px-3"
      >
        {region}
      </button>
    );
  });

  return (
    <div className="mb-4">
      <div className="relative">
        <button
          onClick={() => setIsSelected(!isSelected)}
          className="flex flex-row justify-between items-center bg-white_DarkModeText_LightModeElements rounded-md shadow-md w-56 h-14 pl-6 pr-2 focus:outline-none"
        >
          <span className="leading-none">Filter by Region</span>
          <div className="text-3xl">
            {isSelected && <RiArrowDropUpLine />}
            {!isSelected && <RiArrowDropDownLine />}
          </div>
        </button>
        <div
          className={`${
            isSelected ? "block" : "hidden"
          } absolute flex flex-col w-full mt-1 rounded-md pl-4 py-4 bg-white_DarkModeText_LightModeElements shadow-lg`}
        >
          {items}
        </div>
      </div>
    </div>
  );
};

export default RegionSelector;
