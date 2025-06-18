import React from "react";
import "./Button.scss";
interface ButtonProps {
  label: string;
}

export const Button = ({ label }: ButtonProps) => {
  return (
    <div className="buttons">
      <button id="prevBtn" className="btn">
        {label}
      </button>
    </div>
  );
};
