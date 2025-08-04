import { createContext } from "react";

interface UserI {
  firstName: string;
  lastName: string;
  email: string;
}

interface UserContextI {
  user: UserI | null;
}

export const UserContext = createContext<UserContextI | null>(null);
