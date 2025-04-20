import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
