"use client";

import React from "react";
import Image from "next/image";

interface CountryCardProps {
  flagSrc: string;
  countryName: string;
  population: number;
  region: string;
  capital: string;
}

const Country_Card = (countryProps: CountryCardProps) => {
  return (
    <div className="flex flex-col bg-white_DarkModeText_LightModeElements w-80 rounded-lg shadow-sm overflow-hidden">
      <div className="">
        <Image
          src={countryProps.flagSrc}
          alt="country flag"
          width={0}
          height={0}
          style={{ width: "400px", height: "180px" }}
        ></Image>
      </div>
      <div className="py-8 px-6">
        <p className="font-bold text-2xl mb-6">{countryProps.countryName}</p>
        <p className="font-semibold pb-2 text-lg">
          Population:{" "}
          <span className="font-normal">
            {countryProps.population.toLocaleString("en-US")}
          </span>
        </p>
        <p className="font-semibold pb-2 text-lg">
          Region: <span className="font-normal">{countryProps.region}</span>
        </p>
        <p className="font-semibold text-lg">
          Capital: <span className="font-normal">{countryProps.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Country_Card;
