"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { ChangeEvent } from "react";
import { IoIosSearch } from "react-icons/io";
import { useDebouncedCallback } from "use-debounce";

const SearchForm = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const params = new URLSearchParams(searchParams);
      if (e) {
        params.set("country", e.target.value);
        params.delete("region");
      } else {
        params.delete("country");
      }
      replace(`${pathname}?${params.toString()}`);
    },
    300
  );

  return (
    <form action="" className="w-full">
      <div className="flex flex-row justify-start items-center gap-6 h-16 w-1/2 shadow-md rounded-lg bg-white_DarkModeText_LightModeElements">
        <div className="pl-6 text-darkGray_LightModeInput text-2xl font-extrabold">
          <IoIosSearch />
        </div>
        <input
          type="text"
          name="country"
          placeholder="Search for a country..."
          className="h-full w-full"
          onChange={handleChange}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </div>
    </form>
  );
};

export default SearchForm;
