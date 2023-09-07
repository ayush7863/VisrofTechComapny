import React from "react";
import { Route, Routes } from "react-router-dom";
import Temperature from "./Components/Temperature";
import Todo from "./Components/Todo";
import Home from "./pages/Home";
import Crypto from "./Components/Crypto";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={"/temperature"} element={<Temperature />} />
      <Route path={"/todo"} element={<Todo />} />
      <Route path={"/crypto"} element={<Crypto />} />
    </Routes>
  );
};

export default AllRoutes;
