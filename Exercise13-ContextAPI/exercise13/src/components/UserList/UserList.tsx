import { useContext } from "react";
import { UsersContext } from "../../Context/users";

export const UserList = () => {
  const context = useContext(UsersContext);

  if (!context) {
    return null;
  }
  return (
    <>
      <ul>
        {context.users.map((user) => {
          return <li key={user.name}>{user.name}</li>;
        })}
      </ul>
    </>
  );
};
