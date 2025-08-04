import { useState } from "react";
import "./App.css";
import { UserContext } from "./Context/user";
import { Button } from "./components/Button/Button";
import { List } from "./components/List/List";

function App() {
  const user = {
    firstName: "Hristijan",
    lastName: "Ralevski",
    email: "hristijan.ralevski@hotmail.com",
  };
  return (
    <>
      <h1>Context API</h1>
      <UserContext value={{ user }}>
        <Button value="Click Me 1!" />
        <Button value="Click Me 2!" />
        <Button value="Click Me 3!" />
        <List
          list={[{ label: "Item 1" }, { label: "Item 2" }, { label: "Item 3" }]}
        />
      </UserContext>
    </>
  );
}

export default App;
