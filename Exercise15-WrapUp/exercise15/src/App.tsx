import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { DetailPage } from "./Pages/DetailPage/DetailPage";

function App() {
 

  return (
    <>
      <h1>Countries</h1>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:cca3" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
