import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// Components
import Home from "../pages/Home";

export default function Router() {
  return (
    <Routes>
      <Route>
        <Route path="home" element={<Home />} />
        <Route path="*" element={<Navigate to="home" />} />
      </Route>
    </Routes>
  );
}
