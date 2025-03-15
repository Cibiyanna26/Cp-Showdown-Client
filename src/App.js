import React from "react";
import {Route, Routes} from 'react-router-dom'
import OnboardingLeetcode from "./Pages/OnboardingLeetcode";

const App = () => {
  return (
    <Routes>
      <Route path="/leetcodeOnboarding" element={<OnboardingLeetcode/>}/>
    </Routes>
  );
}

export default App;
