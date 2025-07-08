import React from "react";
import { Son } from "./Son";

interface Props {
  name: string;
  count: number;
  handleClick: () => void;
}

export const Father = ({ name, count, handleClick }: Props) => {
  return (
    <div>
      <h1>Father: {name}</h1>
      <button onClick={handleClick}>Increment {count}</button>
      <Son name={name} />
    </div>
  );
};
