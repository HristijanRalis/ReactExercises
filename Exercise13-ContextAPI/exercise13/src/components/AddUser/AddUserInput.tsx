import { useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

export const AddUserInput = ({
  handleAddUser,
}: {
  handleAddUser: (name: string) => void;
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChangeInput = (char: string) => {
    setInputValue(char);
  };
  const onHandleAddUser = () => {
    // add new user with inputValue name
    handleAddUser(inputValue);
  };
  return (
    <>
      <Input handleChangeInput={handleChangeInput} />
      <Button label="Add User" onClick={onHandleAddUser} />
    </>
  );
};
