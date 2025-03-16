import {Route, Routes} from 'react-router-dom'
import OnboardingLeetcode from "./Pages/OnboardingLeetcode";
import Login from "./Pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/leetcodeOnboarding" element={<OnboardingLeetcode/>}/>
    </Routes>
  );
}

export default App;
