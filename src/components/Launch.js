import React from "react";
import { Outlet } from "react-router-dom";

function Launch() {
  return (
    <div>
      <h1>Launch</h1>
      <Outlet />
    </div>
  );
};

export default Launch;