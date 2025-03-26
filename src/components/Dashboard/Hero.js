import { useState } from "react";
import background_image from "../../assets/landing-background-cross.png";
import leetcode_icon from "../../assets/leetcode.svg";
import close_icon from '../../assets/icons8-close-96.svg'
import { fetchCompareUser } from "../../utils/platform.service";
import toast, { Toaster } from 'react-hot-toast';
import Loader from "../Loader";
import look_down_arrow from "../../assets/look-down.svg";
import { STATEVARIABLES } from "../../contexts/variables";
const Hero = ({
  usernames,
  addUser,
  removeUser,
  handleUserChange,
  handleNewResults,
  compareLoader,
  handleCompareLoader,
  handleDashBoardState
}) => {
  // Function to compare usernames (placeholder for now)

  // const [scrollDownArrow, setSro]
  const [type,setType] = useState('Friendly')
  const compareUsers = async () => {
    handleCompareLoader(true);

    const newUsernames = [];
    usernames.forEach((values, index) => {
      newUsernames.push(values?.trim());
    });

    try {
      const userScores = await fetchCompareUser(newUsernames, type);
      if (!userScores?.valid) {
        if(userScores?.status==401) window.location.href = '/login'
        handleCompareLoader(false);
        handleDashBoardState("whatsup", STATEVARIABLES?.FAILED);
        console.log("failed to fetch user scores");
        toast.error(userScores?.error);
        return;
      }
      handleDashBoardState("whatsup", STATEVARIABLES?.SUCCESS);
      handleNewResults(userScores?.data);
      handleCompareLoader(false);

    } catch (err) {
      handleDashBoardState('whatsup', STATEVARIABLES?.FAILED);
      handleCompareLoader(false);
      console.log("Error:", err);
    }
  };

  return (
    <>
      <div
        className="flex justify-center min-h-screen pt-[100px] relative"
        style={{
          backgroundImage: `url(${background_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Toaster />
        <div className="w-[600px] mx-auto flex flex-col space-y-8 p-[16px] relative">
          {/* Platform Selection Buttons */}
          <div className="flex flex-row justify-around">
            <button 
              className={`px-[12px] py-[8px] rounded-xl ${(type=="Friendly")?"border-2":" bg-primary"}`}
              onClick={()=>setType('Friendly')}
            >
              Friendly
            </button>
            <button 
              className={`px-[12px] py-[8px] rounded-xl ${(type=="Global")?"border-2":" bg-primary"}`}
              onClick={()=>setType('Global')}
            >
              Global
            </button>
          </div>

          <div className="text-center">
            <h1 className="text-3xl">Enter The Usernames to Compare</h1>
          </div>

          {/* Dynamic User Input Fields */}
          <div className="flex flex-col space-y-4">
            {usernames.map((username, index) => (
              <div key={index} className="relative">
                <input
                  className="bg-secondary w-full border-2 border-tertiary pl-[60px] py-[16px] rounded-xl"
                  placeholder={`Enter Leetcode Username ${index + 1}`}
                  value={username}
                  onChange={(e) => handleUserChange(index, e.target.value)}
                />
                <img
                  src={leetcode_icon}
                  className="absolute top-3 left-5 w-[30px] h-[30px]"
                  alt="Leetcode Icon"
                />
                <button onClick={() => removeUser(index)}>
                  <img
                    src={close_icon}
                    className="absolute top-4 right-4 w-[30px] h-[30px]"
                    alt="Leetcode Icon"
                  />
                </button>
              </div>
            ))}
          </div>

          {/* Buttons: Add User & Compare */}
          <div className="grid grid-cols-2 space-x-4">
            <button
              onClick={addUser}
              disabled={usernames.length >= 5}
              className={`border-2 border-white p-[16px] rounded-xl ${
                usernames.length >= 5 ? "bg-gray-500 cursor-not-allowed" : ""
              }`}
            >
              Add User
            </button>
            {compareLoader == false ? (
              <button
                onClick={compareUsers}
                className="bg-primary p-[16px] rounded-xl"
              >
                Compare
              </button>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
