import { Link } from "react-router-dom";
import type { CountryI } from "../../types";
import "./Country.css";

interface CountryProps {
  country: CountryI;
}

export const Country = ({ country }: CountryProps) => {
  const { flags, name, id } = country;
  return (
    <Link to={`/country/${id}`}>
      <div className="country">
        <div className="wrapperImg ">
          <img src={flags.png} alt={flags.alt} />
        </div>
        <p>Country: {name}</p>
      </div>
    </Link>
  );
};
