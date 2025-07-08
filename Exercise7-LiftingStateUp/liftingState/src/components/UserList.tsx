import React, { useState } from "react";
import type { User } from "../App";

interface UserProps {
  users: User[];
}

export const UserList = ({ users }: UserProps) => {
  return (
    <div>
      <h1>UserList</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.email}>
              {user.firstName} {user.lastName} - {user.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
