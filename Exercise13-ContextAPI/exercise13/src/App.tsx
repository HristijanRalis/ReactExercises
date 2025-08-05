import { use, useState } from "react";
import "./App.css";
import { UserContext } from "./Context/user";
import { Button } from "./components/Button/Button";
import { List } from "./components/List/List";
import { AddUserInput } from "./components/AddUser/AddUserInput";
import { UserList } from "./components/UserList/UserList";
import { UsersContext } from "./Context/users";

export interface User {
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const handleAddUser = (name: string) => {
    setUsers((prev) => [...prev, { name }]);
  };
  // For Example 1
  // const user = {
  //   firstName: "Hristijan",
  //   lastName: "Ralevski",
  //   email: "hristijan.ralevski@hotmail.com",
  // };
  return (
    <>
      <h1>Context API</h1>
      {/* Example 1 */}
      {/* <UserContext value={{ user }}>
        <Button value="Click Me 1!" />
        <Button value="Click Me 2!" />
        <Button value="Click Me 3!" />
        <List
          list={[{ label: "Item 1" }, { label: "Item 2" }, { label: "Item 3" }]}
        />
      </UserContext> */}

      <UsersContext value={{ users }}>
        <AddUserInput handleAddUser={handleAddUser} />
        <UserList />
      </UsersContext>
    </>
  );
}

export default App;
