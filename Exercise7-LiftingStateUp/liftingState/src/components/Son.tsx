import React from "react";
import { GrandSon } from "./GrandSon";

interface Props {
  name: string;
}

export const Son = ({ name }: Props) => {
  return (
    <div>
      <h1>Son: {name}</h1>
      <GrandSon name={name} />
    </div>
  );
};
