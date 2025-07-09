import React, { use, useState } from "react";
import { useNavigation } from "react-router-dom";

const USERS = [
  {
    username: "hristijan",
    password: "123",
  },

  {
    username: "igor",
    password: "234",
  },

  {
    username: "Martin",
    password: "456",
  },
];

export const Login = () => {
  const navigate = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      className="form"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const findUser = USERS.find((user) => {
          if (user.username === username && user.password) {
            return true;
          }
          return false;
        });

        // if(findUser) {
        //     navigate("/", {
        //         state: findUser,
        //     })
        // } else {
        //     alert("User not found");
        // }
      }}
    >
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
    </form>
  );
};
