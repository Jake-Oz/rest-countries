"use client";

import React, { useEffect, useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    setIsDarkMode(matchMedia("(prefers-color-scheme: dark)").matches);
    matchMedia("(prefers-color-scheme: dark)").addEventListener(
      "change",
      ({ matches }) => {
        if (matches) {
          setIsDarkMode(true);
          console.log("change to dark mode!");
        } else {
          setIsDarkMode(false);
          console.log("change to light mode!");
        }
      }
    );
  }, []);
  return (
    <header className="sticky top-0 z-10 flex flex-row justify-between items-centre py-10 px-20 bg-white_DarkModeText_LightModeElements dark:bg-darkBlue_DarkModeElements dark:text-white_DarkModeText_LightModeElements">
      <div>
        <h1 className="font-extrabold text-3xl">Where in the world?</h1>
      </div>

      <div>
        {isDarkMode && (
          <p className="flex flex-row item items-center gap-2 font-semibold text-lg">
            <span className="text-xl">
              <IoMoonOutline />
            </span>
            Dark Mode
          </p>
        )}
        {!isDarkMode && (
          <p className="flex flex-row item items-center gap-2 font-semibold text-lg">
            <span className="text-xl">
              <CiLight />
            </span>
            Light Mode
          </p>
        )}
      </div>
    </header>
  );
};

export default Header;
