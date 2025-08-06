import { useEffect, useState } from "react";
import { Country } from "../../components/Country/Country";
import type { CountryI } from "../../types";
import "./HomePage.css";
import { useFetch } from "../../hooks/useFetch";
export const HomePage = () => {
  const { data, loading, error } = useFetch<CountryI>(
    "https://restcountries.com/v3.1/independent?status=true&fields=name,flags"
  );
  return (
    <>
      <h2>HomePage</h2>
      {/*FlagCard - name, image */}

      {loading && <p>Loading...</p>}
      {error && <p>Error! </p>}
      <div className="countriesContainer">
        {data.map((country) => {
          return <Country key={country.name.common} country={country} />;
        })}
      </div>
    </>
  );
};
