import { useState } from "react";

export const useSmartPassword = () => {
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setIsPasswordValid(password.length >= 8);
  };

  return {
    isPasswordValid,
    handleChange,
  }
};
