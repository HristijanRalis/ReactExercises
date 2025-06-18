import React, { useState } from "react";
import "./Counter.css";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    console.log("Increase button click");
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    console.log("Decrease button click");
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button id="decrease" onClick={decreaseCount} className="btn">
        Decrease
      </button>
      <button id="increase" onClick={increaseCount} className="btn">
        Increase
      </button>
    </div>
  );
};
