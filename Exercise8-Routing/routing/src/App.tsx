import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Auth } from "./components/Auth";
import { ErrorPage } from "./components/ErrorPage";
import { Root } from "./components/Root";
import { SignOut } from "./components/SignOut";
import { SignUp } from "./components/SignUp";
import { FAQ } from "./components/FAQ";
import { Products } from "./components/Products";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth" element={<Auth />}>
            <Route path="signup" element={<SignUp />} />
            <Route path="signout" element={<SignOut />} />
          </Route>
          <Route path="/faq" element={<FAQ />} />

          <Route path="products/:id" element={<Products />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
