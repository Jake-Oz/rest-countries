import { countReset } from "console";
import Country_Card from "./UIComponents/country_card";
import RegionSelector from "./UIComponents/regionSelector";
import SearchForm from "./UIComponents/searchform";
import { getCountries } from "./actions/countryData";
import Link from "next/link";

interface countryData {
  cca2: string;
  flags: {
    svg: string;
  };
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams?: { country?: string; region?: string };
}) {
  const countries: countryData[] = await getCountries();
  let filteredCountries: countryData[];
  if (!!searchParams?.region) {
    filteredCountries = countries.filter(
      (country) => country.region == searchParams.region
    );
  } else {
    const term = searchParams?.country;
    const searchTerm = term ? term[0].toUpperCase() + term.slice(1) : "";
    filteredCountries = countries.filter((country) =>
      country.name.common.includes(searchTerm)
    );
  }

  filteredCountries.sort((a, b) => {
    if (a.name.common < b.name.common) {
      return -1;
    } else {
      return 1;
    }
  });

  const cards = filteredCountries.map((country: countryData) => {
    return (
      <Link key={country.name.common} href={`/detail/${country.cca2}`}>
        <Country_Card
          flagSrc={country.flags.svg}
          countryName={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      </Link>
    );
  });

  return (
    <main className="bg-veryLightGray_LightModeBG  ">
      <hr className="border-none shadow-[rgba(133,133,133,0.20)_0px_2px_4px_1px]" />
      <section className="py-10 px-20">
        <div className="flex flex-row justify-between items-center">
          <SearchForm />
          <RegionSelector />
        </div>
      </section>
      <section className="grid grid-cols-1 desktop:grid-cols-4 gap-20 py-4 px-20">
        {cards}
      </section>
    </main>
  );
}
