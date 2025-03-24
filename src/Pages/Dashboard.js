
import Logo from "../assets/Devoice-White-Logo.png";
import Hero from "../components/Dashboard/Hero";
import Footer from "../components/Footer";
import drop_down from '../assets/icon _chevron bottom_.svg'
import leetcode_icon from '../assets/leetcode.svg'
import Comparision from "../components/Dashboard/Comparision";
import { useEffect, useState } from "react";
import useUserDetails from "../hooks/useUserDetails";
import { useSearchParams, Link } from "react-router-dom";
import Analytics from "../components/Dashboard/Analytics";

const Dashboard = () => {
  const { userDetails, isVerified } = useUserDetails();

  const [usernames, setUsernames] = useState([""]);

  const [results, setResult] = useState([]);

  const [searchParams] = useSearchParams();
  useEffect(() => {
    const access_token = searchParams.get("accessToken");
    if (access_token) {
      sessionStorage.setItem("access_token", access_token);
    }
    if (!isVerified) {
      window.location.href = "/";
    }
  }, [userDetails, isVerified]);

  // Function to add a new input field (limit 5)
  const addUser = () => {
    if (usernames.length < 5) {
      setUsernames([...usernames, ""]);
    }
  };

   const removeUser = (index) => {
     const newUsername = [];
     usernames.forEach((value, idx) => {
       if (idx != index) newUsername.push(usernames[idx]);
     });
     setUsernames(newUsername);
   };

   // Function to handle username input changes
   const handleUserChange = (index, value) => {
     const newUsernames = [...usernames];
     newUsernames[index] = value;
     setUsernames(newUsernames);
   };

  const handleNewResults = (value) =>{
    console.log("new result values", value)
    setResult(value);
  }


  return (
    <>
      <section className="landing page text-white cursor-custom">
        <nav
          id="navbar"
          className="bg-transparent fixed top-0 w-full"

        >
          <div className="flex items-center justify-between py-[8px] px-[20px]">
            <div id="left-logo" className="flex flex-row items-center">
              <img className="w-[60px] h-[60px]" src={Logo}></img>
              <Link to={"/"} className="text-xl font-bold">
                CP SHOWDOWN
              </Link>
            </div>
            <div className="flex flex-row items-center space-x-4 p-[8px] rounded-xl text-white opacity-70 border-2">
              {userDetails ? (
                <>
                  <p>{userDetails?.name}</p>
                  <img
                    className="w-[30px] h-[30px] rounded-full"
                    src={leetcode_icon}
                  ></img>
                </>
              ) : (
                <Link
                  to="/login"
                  className="px-4 py-2 bg-blue-500 rounded-md text-white"
                >
                  Log In
                </Link>
              )}
            </div>
          </div>
        </nav>
        <Hero
          usernames={usernames}
          addUser={addUser}
          removeUser={removeUser}
          handleUserChange={handleUserChange}
          handleNewResults={handleNewResults}
        />
        <Comparision usernames={usernames} results={results} />
        <Analytics usernames={usernames} results={results} />
        <Footer />
      </section>
    </>
  );
}

export default Dashboard;