import React from "react";
import {useCallback, useEffect, useState } from "react";
import background_image from "@/assets/png/landing-background-cross.png";
import leetcode_icon from "@/assets/svg/leetcode.svg";
import close_icon from "@/assets/svg/icons8-close-96.svg";
import { fetchCompareUser } from "@/lib/utils";
import toast, { Toaster } from "react-hot-toast";
import Loader from "@/components/Loader";
import DashboardStyle from "@/styles/Dashboard.module.css";
import { STATEVARIABLES } from "@/lib/variables";
import { MdDelete } from "react-icons/md";



interface HeroProps {
  usernames: string[];
  addUser: () => void;
  removeUser: (index: number) => void;
  handleUserChange: (index: number, value: string) => void;
  handleNewResults: (data: any) => void;
  compareLoader: boolean;
  handleCompareLoader: (state: boolean) => void;
  handleDashBoardState: (key: string, value: any) => void;
  recentResults: any[];
  setRecentResults: (results: any[]) => void;
}

const Hero: React.FC<HeroProps> = ({
  usernames,
  addUser,
  removeUser,
  handleUserChange,
  handleNewResults,
  compareLoader,
  handleCompareLoader,
  handleDashBoardState,
  recentResults,
  setRecentResults,
}) => {
  const [historyBar, setHistoryBar] = useState<boolean>(false);

  const compareUsers = async () => {
    handleCompareLoader(true);
    const newUsernames = usernames.map((username) => username?.trim());

    try {
      const userScores = await fetchCompareUser(newUsernames);
      if (userScores?.status === 413) {
        console.log("Payload too large. Please reduce the size of the request.");
        toast.error("Payload too large. Please reduce the size of the request.");
        handleCompareLoader(false);
        return;
      }

      if (!userScores?.valid) {
        if (userScores?.status === 401) window.location.href = "/login";
        handleCompareLoader(false);
        handleDashBoardState("whatsup", STATEVARIABLES?.FAILED);
        toast.error(userScores?.error || "An unknown error occurred.");
        return;
      }

      handleNewResults(userScores?.data);
      handleDashBoardState("compare_matrix", userScores?.additional_matrix);
      const storedResults = JSON.parse(localStorage.getItem("recentResults") || "[]");
      const updatedResults = [userScores?.data, ...storedResults].slice(0, 5);
      localStorage.setItem("recentResults", JSON.stringify(updatedResults));
      setRecentResults(updatedResults);
      handleCompareLoader(false);
    } catch (err) {
      handleDashBoardState("whatsup", STATEVARIABLES?.FAILED);
      handleCompareLoader(false);
      console.error("Error:", err);
    }
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("recentResults");
    setRecentResults([]);
    toast.success("History cleared successfully!");
  };

  const handleHistoryTab = useCallback(() => {
    setHistoryBar(!historyBar);
  }, [historyBar]);

  return (
    <>
      <div
        className="flex justify-center min-h-screen pt-[100px] relative  items-center"
        style={{
          backgroundImage: `url(${background_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Toaster />

        <div
          className={`${DashboardStyle.historyTab} transition-all duration-300`}
        >
          <div
            className={`flex flex-row justify-end ${DashboardStyle.historyTriggerButton}`}
          >
            <button
              className={`${DashboardStyle.historyOpen} mb-2`}
              onClick={handleHistoryTab}
            >
              <span>{historyBar === false ? "<" : "x"}</span>
            </button>
          </div>

          {historyBar && (
            <div className={`${DashboardStyle.historyResults}`}>
              <h1 className="text-xl text-center">History Of Prev 5</h1>
              <div className={`${DashboardStyle.historyCol}`}>
                {recentResults.length > 0 ? (
                  recentResults.map((data, index) => (
                    <button
                      key={index}
                      className={`${DashboardStyle.eachHistory}`}
                      onClick={() => handleNewResults(data)}
                    >
                      <span className="text-blue-500">#1</span>
                      <span className="text-yellow-500">{data[0]?.userId}</span>
                      <span>{data?.day}</span>
                    </button>
                  ))
                ) : (
                  <div className="flex flex-1 items-center justify-center text-yellow-400">
                    <h1>No comparisons ^-^</h1>
                  </div>
                )}
              </div>
              <div className="flex flex-row justify-end">
                <button
                  className="p-[8px] rounded-xl text-red-600 hover:bg-secondary text-[20px]"
                  onClick={clearLocalStorage}
                >
                  
                   {React.createElement(MdDelete)} 
                  
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="w-[500px] mx-auto flex flex-col space-y-8 p-[16px] relative">
          <div className="text-center">
            <h1 className="text-3xl">Enter The Usernames to Compare</h1>
          </div>

          <div className="flex flex-col space-y-4">
            {usernames.map((username, index) => (
              <div key={index} className="relative">
                <input
                  className="input-design"
                  placeholder={`Enter Leetcode Username ${index + 1}`}
                  value={username}
                  maxLength={25}
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
                    alt="Close Icon"
                  />
                </button>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 space-x-4">
            <button
              onClick={addUser}
              disabled={usernames.length >= 5}
              className={`secondary-button ${
                usernames.length >= 5 ? "bg-gray-500 cursor-not-allowed" : ""
              }`}
            >
              Add User
            </button>
            {!compareLoader ? (
              <button onClick={compareUsers} className="primary-button">
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
