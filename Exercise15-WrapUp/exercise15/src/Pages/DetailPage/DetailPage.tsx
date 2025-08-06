import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import type { CountryDetailsI } from "../../types";

export const DetailPage = () => {
  const { cca3 } = useParams();
  const { data, loading, error } = useFetch<CountryDetailsI>(
    `https://restcountries.com/v3.1/alpha/${cca3}?fields=name,flags,population,capital`
  );

  if (loading) return <p>Loading country...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No country data found.</p>;

  const { name, flags, population, capital } = data;

  return (
    <div>
      <h2>{name.official}</h2>
      <img src={flags.png} alt={flags.alt ?? "Country flag"} />
      <p>Population: {population}</p>
      <p>Capital: {capital?.join(", ")}</p>
      <p>Common Name: {name.common}</p>
    </div>
  );
};