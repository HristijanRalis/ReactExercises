import { useState } from "react";
import "./App.css";
import { Home } from "./Pages/Home";
import { About } from "./components/About/About";
import { Listening } from "./components/Listening/Listening";

type Page = "home" | "about" | "listen";

function App() {
  const [page, setPage] = useState<Page>("home");

  const handlePageChange = () => {
    setPage((prevPage) => {
      if (prevPage === "home") return "about";
      if (prevPage === "about") return "listen";
      return "home";
    });
  };
  return (
    <>
      <button onClick={handlePageChange}>Change Page</button>
      {page === "home" && <Home />}
      {page === "listen" && <Listening />}
      {page === "about" && <About />}
    </>
  );
}

export default App;
