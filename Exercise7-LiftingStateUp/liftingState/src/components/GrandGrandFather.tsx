import React, { useState } from "react";
import { GrandFather } from "./GrandFather";

export const GrandGrandFather = () => {
  const name = "Hristijan";

  return (
    <div>
      <h1>GrandGrandFather</h1>
      <GrandFather name={name} />
    </div>
  );
};
