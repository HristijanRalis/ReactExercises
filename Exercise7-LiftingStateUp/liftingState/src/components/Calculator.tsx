import React, { useState } from "react";

interface ButtonProps {
  text: string;
  onClick: (value: string) => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={() => {
        onClick(text);
      }}
      style={{ flex: 1, height: 50 }}
    >
      {text}
    </button>
  );
};

export const Calculator = () => {
  const [value, setValue] = useState<string>("");
  const handleButtonClick = (textValue: string) => {
    if (textValue === "." && value.includes(".")) {
      return;
    }
    setValue((prev) => prev + textValue);
  };

  const handleDelete = () => {
    setValue("");
  };

  const handleEqual = () => {
    const result = eval(value);
    setValue(result);
  };
  return (
    <div style={styles.container}>
      <h1>Calculator</h1>

      <div style={styles.display}>
        <h1>{value}</h1>
      </div>
      <div style={styles.row}>
        <Button onClick={handleButtonClick} text="(" />
        <Button onClick={handleButtonClick} text=")" />
        <Button onClick={handleDelete} text="C" />
        <Button onClick={handleDelete} text="AC" />
      </div>
      <div style={styles.row}>
        <Button onClick={handleButtonClick} text="7" />
        <Button onClick={handleButtonClick} text="8" />
        <Button onClick={handleButtonClick} text="9" />
        <Button onClick={handleButtonClick} text="/" />
      </div>
      <div style={styles.row}>
        <Button onClick={handleButtonClick} text="4" />
        <Button onClick={handleButtonClick} text="5" />
        <Button onClick={handleButtonClick} text="6" />
        <Button onClick={handleButtonClick} text="*" />
      </div>
      <div style={styles.row}>
        <Button onClick={handleButtonClick} text="1" />
        <Button onClick={handleButtonClick} text="2" />
        <Button onClick={handleButtonClick} text="3" />
        <Button onClick={handleButtonClick} text="-" />
      </div>
      <div style={styles.row}>
        <Button onClick={handleButtonClick} text="." />
        <Button onClick={handleButtonClick} text="0" />
        <Button onClick={handleEqual} text="=" />
        <Button onClick={handleButtonClick} text="+" />
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    width: 400,
    height: 500,
  },
  display: {
    background: "white",
    height: 60,
    border: "1px solid black",
    display: "flex",
    alignItems: "end",
    justifyContent: "end",
    color: "black",
  },
  row: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
