import { useState } from "react";
import { useSmartPassword } from "../../utils/useSmartPassword";

export const Form = () => {
  const [password, setPassword] = useState("");
  //   const [isPasswordValid, setIsPasswordValid] = useState(false);
  const { isPasswordValid, handleChange } = useSmartPassword();

  return (
    <>
      <form>
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
            // setIsPasswordValid(e.target.value.length >= 8);
            handleChange(e);
          }}
        />
      </form>
      {isPasswordValid && <h1>The {password} is a valid</h1>}
    </>
  );
};
