import { Link } from "react-router-dom";
import type { CountryI } from "../../types";
import "./Country.css";

interface CountryProps {
  country: CountryI;
}

export const Country = ({ country }: CountryProps) => {
  return (
    <Link to={`/country/${country.cca3}`}>
      <div className="country">
        <div className="wrapperImg ">
          <img src={country.flags.png} alt={country.flags.alt} />
        </div>
        <p>Country: {country.name.common}</p>
      </div>
    </Link>
  );
};
