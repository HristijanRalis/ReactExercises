import React, { useState } from "react";
import { Father } from "./Father";

interface Props {
  name: string;
}

export const GrandFather = ({ name }: Props) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1>GrandFather : {name}</h1>
      <Father name={name} count={count} handleClick={handleClick} />
    </div>
  );
};
