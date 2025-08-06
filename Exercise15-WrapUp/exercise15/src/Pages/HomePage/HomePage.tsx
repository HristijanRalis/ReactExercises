import { useEffect, useState } from "react";
import { Country } from "../../components/Country/Country";
import type { CountryI } from "../../types";
import "./HomePage.css";
import { useFetch } from "../../hooks/useFetch";
import { Search } from "../../components/Search/Search";
export const HomePage = () => {
  const { data, loading, error } = useFetch<CountryI>(
    "https://restcountries.com/v3.1/independent?status=true&fields=name,flags"
  );
  const [countriesToRender, setCountriesToRender] = useState<CountryI[]>([]);

  const handleSearch = (searchTerm: string) => {
    // TODO IMplementation for search functionality
    const filteredCountries = data.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm)
    );
    setCountriesToRender(filteredCountries);
  };

  useEffect(() => {
    setCountriesToRender(data);
  }, [data]);
  return (
    <>
      <h2>HomePage</h2>
      {/*FlagCard - name, image */}

      {loading && <p>Loading...</p>}
      {error && <p>Error! </p>}
      <Search handleSearch={handleSearch} />
      <div className="countriesContainer">
        {countriesToRender.map((country) => {
          return <Country key={country.name.common} country={country} />;
        })}
      </div>
    </>
  );
};
