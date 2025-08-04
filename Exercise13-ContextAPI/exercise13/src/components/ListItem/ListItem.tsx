import { useContext } from "react";
import { UserContext } from "../../Context/user";

export const ListItem = ({ label }: { label: string }) => {
  const context = useContext(UserContext);
  if (!context) {
    return null;
  }
  return (
    <li>
      {context.user?.firstName} {context.user?.lastName}
    </li>
  );
};
