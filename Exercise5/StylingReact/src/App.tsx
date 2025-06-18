import "./App.css";
import { Clock } from "./Components/Clock/Clock";
import { Navbar } from "./Components/Navbar/Navbar";
import { Card } from "./Components/StylingWithCss/Card/Card";
import { StylingWithCss } from "./Components/StylingWithCss/StylingWithCss";
import { StylingWithSass } from "./Components/StylingWithCss/StylingWithSass/StylingWithSass";

function App() {
  return (
    <>
      {/* <Navbar />
      <h1>Styling React</h1>
      { <StylingWithCss /> }
      <StylingWithSass />
      <Card /> */}
      <Clock />
    </>
  );
}

export default App;
