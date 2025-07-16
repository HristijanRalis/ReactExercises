import React, { useState } from "react";

export const useInputValue = () => {
  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setValue("");
      return;
    }
    setValue(e.target.value.trim());
  };

  return {
    value,
    onChange,
  };
};
