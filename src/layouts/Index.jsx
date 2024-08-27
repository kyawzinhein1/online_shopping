import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav";

export const Index = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <Nav />
      <Outlet />
    </div>
  );
};
