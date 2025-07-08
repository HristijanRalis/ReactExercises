import React from "react";

interface Props {
  name: string;
}

export const GrandSon = ({ name }: Props) => {
  return (
    <div>
      <h1>GrandSon: {name}</h1>
    </div>
  );
};
