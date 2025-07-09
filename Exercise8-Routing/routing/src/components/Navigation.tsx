import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <header>
      <ul className="nav-list">
        <li>
          <NavLink
            style={({ isActive, isPending, isTransitioning }) => {
              console.log("Ova e vo konzola", isActive);
              return {
                color: isActive ? "red" : "black",
              };
            }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive, isPending, isTransitioning }) => {
              console.log("Ova e vo konzola", isActive);
              return {
                color: isActive ? "red" : "black",
              };
            }}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive, isPending, isTransitioning }) => {
              console.log("Ova e vo konzola", isActive);
              return {
                color: isActive ? "red" : "black",
              };
            }}
            to="/auth"
          >
            Auth
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive, isPending, isTransitioning }) => {
              console.log("Ova e vo konzola", isActive);
              return {
                color: isActive ? "red" : "black",
              };
            }}
            to="/faq"
          >
            FAQ
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
