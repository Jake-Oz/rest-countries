"use client";

import React, { useEffect, useState } from "react";
import ThemeSwitcher from "./theme_switcher";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-10 flex flex-row justify-between items-centre py-10 px-20 bg-white_DarkModeText_LightModeElements dark:bg-darkBlue_DarkModeElements dark:text-white_DarkModeText_LightModeElements shadow-[rgba(133,133,133,0.20)_0px_2px_4px_1px]">
        <div>
          <h1 className="font-extrabold text-3xl">Where in the world?</h1>
        </div>
        <ThemeSwitcher />
      </header>
    </>
  );
};

export default Header;
