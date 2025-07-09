import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [username, setUsername] = useState("");

  return (
    <div>
      <h1>SignUp</h1>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>

        <Link
          to="/"
          state={{
            name: "Hristijan",
            lastName: "Ralevski",
            username,
          }}
        >
          Sign Up
        </Link>
      </form>
    </div>
  );
};
