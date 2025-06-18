import "./App.css";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Button/InputElement/Input";
import { Counter } from "./components/Counter/Counter";
import { DiceRoll } from "./components/DiceRoll/DiceRoll";
import { MyButton } from "./components/MyButton/MyButton";

function App() {
  return (
    <>
      <h1>Events Hooks</h1>

      {/* Components */}
      {/* <Button />
      <Input />
      <MyButton label="Click" />
      <MyButton label="Double click" />
      <MyButton label="Mouse over" /> */}
      <Counter />
      <DiceRoll />
    </>
  );
}

export default App;
