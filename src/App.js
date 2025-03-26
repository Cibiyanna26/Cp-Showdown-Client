import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Onboarding from "./Pages/Onboarding";
import Login from "./Pages/Login";
import Compare from "./Pages/Compare";
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";
import { BACKEND_LOCAL_HOST } from "./contexts/variables";
import UserDetailsProvider from "./providers/UserDetailsProvider";


const App = () => {

  return (
    <UserDetailsProvider>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </UserDetailsProvider>
  );
};

export default App;
