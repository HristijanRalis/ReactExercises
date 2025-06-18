import React, { useState } from "react";
import "./DiceRoll.css";
export const DiceRoll = () => {
  const [value, setValue] = useState(0);
  const handleDiceValue = () => {
    const result = randomRollValue();
    setValue(result);
  };

  const randomRollValue = () => {
    const random = Math.floor(Math.random() * 6) + 1;
    return random;
  };

  return (
    <div className="diceContainer">
      <h1>DiceRoll</h1>

      {!!value && <span className="diceValue">Roled: {value}</span>}
      <button id="diceRoll" className="btn" onClick={handleDiceValue}>
        Roll
      </button>
    </div>
  );
};
