import {
  getCountryByCode,
  getCountryNameByCode,
} from "@/app/actions/countryData";
import React, { ReactComponentElement } from "react";
import Image from "next/image";
import Detail_label from "@/app/UIComponents/detail_label";
import Border_button from "@/app/UIComponents/border_button";
import BackButton from "@/app/UIComponents/back_button";

interface CountryProps {
  name: {
    common: string;
    official: string;
    nativeName: {};
  };
  population: number;
  flags: {
    svg: string;
    alt: string;
  };
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: {};
  languages: {};
  borders: string[];
}

type NameObject = {
  official: string;
  common?: string;
};

const DetailPage = async ({ params }: { params: { slug: string } }) => {
  const countryDataArray: CountryProps[] = await getCountryByCode(params.slug);
  const {
    name,
    population,
    flags,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = countryDataArray[0];

  let nativeName: string | undefined;
  if (name.nativeName !== undefined) {
    const values: NameObject[] = Object.values(name.nativeName);
    nativeName = values[0].common as string;
  }

  const currencySpans = Object.values(currencies as { cc: { name: string } })
    .map((currency) => currency.name)
    .join(", ");

  const languageSpans = Object.values(languages).join(", ");

  const borderName = await getCountryNameByCode(borders);
  let borderNames: React.ReactElement[] | string;

  if (!!borderName) {
    borderNames = borderName?.map((borderCountry) => {
      return (
        <Border_button
          key={borderCountry.cca2}
          name={borderCountry.name.common}
          code={borderCountry.cca2}
        />
      );
    });
  } else {
    borderNames = "No border countries";
  }

  return (
    <div className="grid grid-cols-2 px-16 dark:bg-veryDarkBlue_DarkModeBG h-screen">
      <div className="col-span-1 flex flex-col justify-center items-start px-4">
        <BackButton />
        <Image src={flags.svg} alt={flags.alt} width={600} height={400}></Image>
      </div>
      <div className="col-span-1 flex flex-col justify-center items-start px-16 mt-48 ">
        <h1 className="text-4xl font-extrabold mb-10 dark:text-white_DarkModeText_LightModeElements">
          {name.common}
        </h1>
        <div className="flex flex-row justify-between items-baseline gap-4 w-full ">
          <div className="">
            {!!nativeName && (
              <Detail_label labelName={"Native Name"} labelText={nativeName} />
            )}
            <Detail_label
              labelName={"Population"}
              labelText={population.toLocaleString("en-US")}
            />
            <Detail_label labelName={"Region"} labelText={region} />
            <Detail_label labelName={"Sub Region"} labelText={subregion} />
            <Detail_label labelName={"Capital"} labelText={capital[0]} />
          </div>
          <div className="">
            <Detail_label labelName={"Top Level Domain"} labelText={tld[0]} />
            <Detail_label labelName={"Currencies"} labelText={currencySpans} />
            <Detail_label labelName={"Languages"} labelText={languageSpans} />
          </div>
        </div>
        <div className="mt-16 text-lg font-semibold flex flex-row justify-start items-center gap-4 dark:text-white_DarkModeText_LightModeElements">
          <p>Border Countries:</p>
          <p className="flex flex-row gap-2 flex-wrap">{borderNames}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
