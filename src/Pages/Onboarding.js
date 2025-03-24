import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import background_image from "../assets/landing-background-cross.png";
import Logo from "../assets/Devoice-White-Logo.png";
import google_icon from "../assets/icons8-google 1.svg";
import leetcode_icon from '../assets/leetcode.svg'
import codeforces_icon from "../assets/codeforces.svg";

const Onboarding = () => {
    const navigate = useNavigate()
    const [LeetcodeUsername, setLeetcodeUsername] = useState(null);
    const [CodeforcesUsername, setCodeforcesUsername] = useState(null);
    const clickContinue = () =>{
        console.log(LeetcodeUsername, CodeforcesUsername);
        // navigate('/dashboard')
    }

    return (
      <>
        <div
          className="flex items-center justify-center min-h-screen"
          style={{
            backgroundImage: `url(${background_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="flex flex-col max-w-md p-8 space-y-6 bg-primary rounded-lg shadow-md opacity-70
                 items-center justify-center
                 text-white text-center
                 "
          >
            <img src={Logo} className="w-[80px] h-[80px] "></img>
            <h1 className="text-3xl font-bold stroke-secondary">
              Fill In Your Username
            </h1>
            <div className="relative">
              <input
                className="flex items-center space-x-6 bg-secondary 
                            border-2 border-tertiary pl-[60px] py-[16px] rounded-xl"
                placeholder="Enter Your Leetcode Username"
                value={LeetcodeUsername}
                onChange={(e) => setLeetcodeUsername(e.target.value)}
              ></input>
              <img
                src={leetcode_icon}
                className="absolute top-3 left-5 w-[30px] h-[30px]"
              ></img>
            </div>
            <div className="relative">
              <input
                className="flex items-center space-x-6 bg-secondary 
                            border-2 border-tertiary pl-[60px] py-[16px] rounded-xl"
                placeholder="Enter Your Codeforces Username"
                value={CodeforcesUsername}
                onChange={(e) => setCodeforcesUsername(e.target.value)}
              ></input>
              <img
                src={codeforces_icon}
                className="absolute top-3 left-5 w-[30px] h-[30px]"
              ></img>
            </div>
            <button
              onClick={(e) => clickContinue(e)}
              className="bg-tertiary rounded-xl w-full p-[16px] text-black"
            >
              Continue
            </button>
          </div>
        </div>
      </>
    );
}
export default Onboarding;