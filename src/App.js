import React from "react";
import {Route, Routes} from 'react-router-dom'
import OnboardingLeetcode from "./Pages/OnboardingLeetcode";
import Login from "./Pages/Login";
import OnboardingCodeforces from "./Pages/OnboardingCodeforces";
import Compare from "./Pages/Compare";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Compare/>}/>
      <Route path="/leetcodeOnboarding" element={<OnboardingLeetcode/>}/>
      <Route path="/codeforcesOnboarding" element={<OnboardingCodeforces/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default App;
