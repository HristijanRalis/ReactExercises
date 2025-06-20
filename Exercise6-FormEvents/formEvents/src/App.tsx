import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { Header } from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* header */}
      <Header />

      {/* main section*/}
      <section>
        <Home />
      </section>
      {/* footer */}
    </>
  );
}

export default App;
