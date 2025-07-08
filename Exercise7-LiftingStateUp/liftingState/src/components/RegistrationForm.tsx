import React, { useState } from "react";
import type { User } from "../App";

interface RegisterProps {
  handleAddUser: (newUser: User) => void;
}

export const RegistrationForm = ({ handleAddUser }: RegisterProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        handleAddUser({
          firstName,
          lastName,
          email,
        });

        // @ts-ignore
        e.target.reset();
      }}
    >
      <h1>RegistrationForm</h1>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFirstName(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setLastName(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="firstName">Password</label>
        <input
          type="password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};
