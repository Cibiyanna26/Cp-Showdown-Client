
import Logo from "../assets/Devoice-White-Logo.png";
import Hero from "../components/Dashboard/Hero";
import Footer from "../components/Footer";
import drop_down from '../assets/icon _chevron bottom_.svg'
import leetcode_icon from '../assets/leetcode.svg'
import Comparision from "../components/Dashboard/Comparision";
import { useEffect, useState } from "react";
import useUserDetails from "../hooks/useUserDetails";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import Analytics from "../components/Dashboard/Analytics";
import { isLoggedIn } from "../utils/auth.service";
import Headder from "../components/Headder";

const Dashboard = () => {
  const { userDetails, isVerified, updateLoginStatus, updateUserDetails } = useUserDetails();

  const [usernames, setUsernames] = useState([""]);

  const [results, setResult] = useState([]);

  const [searchParams] = useSearchParams();
  const nav = useNavigate()
  useEffect(()=>{
    const access_token = searchParams.get("accessToken");
    if (access_token) {
      sessionStorage.setItem("access_token", access_token);
      updateLoginStatus(true)
      updateUserDetails(
        {
          name: searchParams.get("name"),
          picture: searchParams.get("picture"),
          email: searchParams.get("email")
        }
      )
      nav('/dashboard')
    }
    else if (sessionStorage.getItem("access_token")==null){
      window.location.href = '/'
    }
    // if (!isVerified) {
    //   window.location.href = "/";
    // }
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
        <Headder/>
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