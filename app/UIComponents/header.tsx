import React from "react";
import { IoMoonOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex flex-row justify-between items-centre py-10 px-20 bg-white_DarkModeText_LightModeElements ">
      <div>
        <h1 className="font-extrabold text-3xl">Where in the world?</h1>
      </div>

      <p className="flex flex-row item items-center gap-2 font-semibold text-lg">
        <span className="text-xl">
          <IoMoonOutline />
        </span>
        Dark Mode
      </p>
    </header>
  );
};

export default Header;
