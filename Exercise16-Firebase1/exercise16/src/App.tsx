import { useEffect, useState } from "react";
import "./App.css";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import { Country } from "./components/Country/Country";
import type { CountryI } from "./types";

function App() {
  const [countries, setCountries] = useState<CountryI[]>([]);
  // useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "countries"));
        querySnapshot.forEach((doc) => {
          const newCountry = {
            id: doc.id,
            ...(doc.data() as CountryI),
          };
          setCountries((prevCountries) => [...prevCountries, newCountry]);
        });
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Firebase</h1>
      {countries.map((country) => (
        <Country key={country.id!} country={country} />
      ))}
    </>
  );
}

export default App;
