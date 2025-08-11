import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { countriesCollection } from "../firebase";
import { addDoc, getDocs } from "firebase/firestore";
import { Country } from "./components/Country/Country";
import type { CountryI } from "./types";

function App() {
  // useEffect
  const [countries, setCountries] = useState<CountryI[]>([]);

  const fetchCountries = useCallback(async () => {
    try {
      const querySnapshot = await getDocs(countriesCollection);
      const fetchedCountries: CountryI[] = [];

      querySnapshot.forEach((doc) => {
        console.log(doc.id);
        const newCountry = {
          id: doc.id,
          ...(doc.data() as CountryI),
        };
        fetchedCountries.push(newCountry);
      });

      setCountries(fetchedCountries);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  }, []);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  const addNewCountry = async () => {
    try {
      await addDoc(countriesCollection, {
        name: "Serbia",
        flags: {
          png: "https://flagcdn.com/w320/rs.png",
          alt: "Flag of Serbia",
        },
      });

      fetchCountries();
    } catch (error) {
      console.error("Error adding country:", error);
    }
  };

  return (
    <>
      <h1>Firebase</h1>
      <button onClick={addNewCountry}>Add new country!</button>
      {countries.map((country) => (
        <Country key={country.id} country={country} />
      ))}
    </>
  );
}

export default App;
