import React from "react";
import "./Input.css";

export const Input = () => {
  function changeValue(e: React.KeyboardEvent<HTMLInputElement>) {
    console.log("Event", e.code === "Enter" ? "Enter pressed" : "Key up");
  }
  return (
    <div className="input">
      <label id="name-lable" htmlFor="input-element">
        Name:{" "}
      </label>
      <input
        type="text"
        id="input-element"
        onChange={(e) => console.log("Event: ", e.target.value)}
        onKeyUp={changeValue}
      />
    </div>
  );
};
