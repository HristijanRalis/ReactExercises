import { createContext } from "react";

export interface User {
  name: string;
}

interface UsersContextI {
  users: User[];
}

export const UsersContext = createContext<UsersContextI | null>(null);
