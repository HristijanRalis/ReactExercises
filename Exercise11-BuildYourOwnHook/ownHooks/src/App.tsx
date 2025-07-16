import { useState } from "react";

import "./App.css";
import { Form } from "./components/Form/Form";
import { CountButton } from "./components/CountButton/CountButton";
import { Login } from "./components/Login/Login";
import { useKeyPress } from "./utils/useKeyPress";
import { TimerComponent } from "./components/TimerComponent/TimerComponent";

function App() {
  const { emoji } = useKeyPress();
  return (
    <>
      <h1>{emoji}</h1>
      <Login />
      <Form />
      <CountButton />
      <TimerComponent />
    </>
  );
}

export default App;
