import { useCallback, useEffect, useState } from "react";
import background_image from "../../assets/landing-background-cross.png";
import leetcode_icon from "../../assets/leetcode.svg";
import close_icon from '../../assets/icons8-close-96.svg'
import { fetchCompareUser } from "../../utils/platform.service";
import toast, { Toaster } from 'react-hot-toast';
import Loader from "../Loader";
import left_arrow from '../../assets/left-arrow-side-nav.svg'
import DashboardStyle from '../../styles/Dashboard.module.css';
import { STATEVARIABLES, HISTORY_DATA } from "../../contexts/variables";
import { MdDelete } from "react-icons/md";



const Hero = ({
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
  results
}) => {
  // Function to compare usernames (placeholder for now)

  // const [scrollDownArrow, setSro]
  const [type, setType] = useState("Friendly");
  const [historyBar, setHistoryBar] = useState(false);

  // Comparing Users

  const compareUsers = async () => {
    handleCompareLoader(true);
    const newUsernames = [];
    usernames.forEach((values, index) => {
      newUsernames.push(values?.trim());
    });

    try {
      const userScores = await fetchCompareUser(newUsernames, type);
      if (!userScores?.valid) {
        if (userScores?.status == 401) window.location.href = "/login";
        handleCompareLoader(false);
        handleDashBoardState("whatsup", STATEVARIABLES?.FAILED);
        console.log("failed to fetch user scores");
        toast.error(userScores?.error);
        return;
      }
      handleNewResults(userScores?.data);
      const storedResults =JSON.parse(localStorage.getItem("recentResults")) || [];
      const updatedResults = [userScores?.data, ...storedResults].slice(0, 5);
      localStorage.setItem("recentResults", JSON.stringify(updatedResults));
      setRecentResults(updatedResults);
      handleCompareLoader(false);
    } catch (err) {
      handleDashBoardState("whatsup", STATEVARIABLES?.FAILED);
      handleCompareLoader(false);
      console.log("Error:", err);
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
        className="flex justify-center min-h-screen pt-[100px] relative"
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
          {/* History Tab Open and Close Button */}
          <div
            className={`flex flex-row justify-end ${DashboardStyle.historyTriggerButton}`}
          >
            <button
              className={`${DashboardStyle.historyOpen} mb-2`}
              onClick={() => {
                handleHistoryTab();
              }}
            >
              <span>{historyBar == false ? "<" : "x"}</span>
              {/* <span className="lg:inline hidden">History</span> */}
            </button>
          </div>

          {historyBar == false ? (
            <></>
          ) : (
            <>
              <div className={` ${DashboardStyle.historyResults}`}>
                <h1 className="text-xl text-center">History Of Prev 5</h1>
                <div className={`${DashboardStyle.historyCol}`}>
                  {recentResults.length > 0 ? (
                    recentResults.map((data, index) => {
                      return (
                        <>
                          <button
                            className={`${DashboardStyle.eachHistory}`}
                            onClick={() => {
                              handleNewResults(data);
                            }}
                          >
                            <span className="text-blue-500">#1</span>
                            <span className="text-yellow-500">
                              {data[0]?.userId}
                            </span>
                            <span>{data?.day}</span>
                          </button>
                        </>
                      );
                    })
                  ) : (
                    <div className="flex flex-1 items-center justify-center text-yellow-400">
                      <h1>No comparisions ^-^</h1>
                    </div>
                  )}
                </div>
                <div className="flex flex-row justify-end">
                  <button
                    className="p-[8px] rounded-xl text-red-600 hover:bg-secondary text-[20px]"
                    onClick={() => {
                      clearLocalStorage();
                    }}
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="w-[600px] mx-auto flex flex-col space-y-8 p-[16px] relative">
          {/* Platform Selection Buttons */}
          <div className="flex flex-row justify-around">
            <button
              className={`${
                type == "Friendly" ? "primary-button" : " secondary-button"
              }`}
              onClick={() => type !== "Friendly" && setType("Friendly")}
            >
              Friendly
            </button>
            <button
              className={`${
                type == "Global" ? "primary-button" : " secondary-button"
              }`}
              onClick={() => type !== "Global" && setType("Global")}
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
                  className="input-design"
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
              className={`secondary-button ${
                usernames.length >= 5 ? "bg-gray-500 cursor-not-allowed" : ""
              }`}
            >
              Add User
            </button>
            {compareLoader == false ? (
              <button onClick={compareUsers} className="primary-button">
                Compare
              </button>
            ) : (
              <Loader />
            )}
          </div>

          {/*  */}
        </div>
      </div>
    </>
  );
};

export default Hero;
