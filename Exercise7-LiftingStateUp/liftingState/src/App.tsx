import { useState } from "react";
import "./App.css";
import { Calculator } from "./components/Calculator";
import { GrandGrandFather } from "./components/GrandGrandFather";
import { RegistrationForm } from "./components/RegistrationForm";
import { UserList } from "./components/UserList";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const handleAddUser = (newUser: User) => {
    setUsers([...users, newUser]);
  };
  return (
    <>
      {/* <GrandGrandFather /> */}
      {/* <Calculator /> */}
      <RegistrationForm handleAddUser={handleAddUser} />
      <UserList users={users} />
    </>
  );
}

export default App;
