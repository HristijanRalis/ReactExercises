import React from "react";
import {
  BrowserRouter,
  Route,
  Router,
  useLocation,
  useParams,
} from "react-router-dom";

export const Home = () => {
  const { state } = useLocation();
  console.log(state.username);
  return (
    <div>
      <h1>Welcome: {state.username}</h1>
    </div>
  );
};
