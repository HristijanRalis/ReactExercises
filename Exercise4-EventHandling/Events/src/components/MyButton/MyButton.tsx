import React from "react";
import "./MyButton.css";

interface MyButton {
  label: string;
}
export const MyButton = ({ label }: MyButton) => {
  const handleClick = () => {
    console.log("Hay Rale", label);
  };
  const handleDoubleClick = () => {
    console.log("Double Rale", label);
  };
  const handleMouseOver = () => {
    console.log("Mouse Rale", label);
  };
  //   const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  //     console.log("Hay Rale", (e.target as HTMLButtonElement).textContent);
  //   };
  //   const handleDoubleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  //     console.log("Double Rale", (e.target as HTMLButtonElement).textContent);
  //   };
  //   const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
  //     console.log("Mouse Rale", (e.target as HTMLButtonElement).textContent);
  //   };
  return (
    <div>
      <button
        className="MyBtn"
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onMouseOver={handleMouseOver}
      >
        {" "}
        {label}:
      </button>
    </div>
  );
};
