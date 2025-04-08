import React, { useState } from "react"
import background_image from "../assets/landing-background-cross.png";
import Logo from "../assets/Devoice-White-Logo.png";
import google_icon from "../assets/icons8-google 1.svg";
import leetcode_icon from '../assets/leetcode.svg'
import codeforces_icon from "../assets/codeforces.svg";
import { BACKEND_LOCAL_HOST } from "../contexts/variables";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import useUserDetails from "../hooks/useUserDetails";

const Onboarding = () => {
    const navigate = useNavigate()
    const [LeetcodeUsername, setLeetcodeUsername] = useState(null);
    const [CodeforcesUsername, setCodeforcesUsername] = useState(null);
    const [searchParams] = useSearchParams();
    const { userDetails, isVerified, updateLoginStatus, updateUserDetails } = useUserDetails();
    let access_token = "";
    useEffect(()=>{
        access_token = searchParams.get("accessToken");
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
        }
        else{
          window.location.href = '/'
        }
      }, []);
    const clickContinue = async() =>{
        console.log(LeetcodeUsername, CodeforcesUsername);
        try{
          const response = await fetch(`${BACKEND_LOCAL_HOST}/protected-route/profile`,{
            method:'PUT',
            headers:{
              'Content-Type':"application/json",
              "Authorization":`Bearer ${access_token}`
            },
            body:JSON.stringify(
              {
                "leetcode_username":LeetcodeUsername,
                "codeforces_username":CodeforcesUsername
              }
            )
          })
          const data = await response.json();
          if(response.status!=200){
            toast.error(data.error)
          }
          else navigate('/dashboard')
        }catch(error){
          console.log("Error ",error)
          toast.error(error.message)
        }
    }

    return (
      <>
        <Toaster/>
        <div
          className="flex items-center justify-center min-h-screen"
          style={{
            backgroundImage: `url(${background_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="flex w-[389px] flex-col max-w-md p-8 space-y-6 bg-primary rounded-lg shadow-md opacity-70
                 items-center justify-center
                 text-white text-center
                 "
          >
            <img src={Logo} className="w-[80px] h-[80px] " alt="Logo"></img>
            <h1 className="text-3xl font-bold stroke-secondary">
              Fill In Your Username
            </h1>
            <div className="relative">
              <input
                className="flex items-center space-x-6 bg-secondary 
                            border-2 border-tertiary pl-[60px] py-[16px] rounded-xl w-[340px]"
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
                            border-2 border-tertiary pl-[60px] py-[16px] rounded-xl w-[340px]"
                placeholder="Enter Your Codeforces Username"
                value={CodeforcesUsername}
                onChange={(e) => setCodeforcesUsername(e.target.value)}
              ></input>
              <img
                src={codeforces_icon}
                className="absolute top-3 left-5 w-[30px] h-[30px]"
                alt="Codeforces"
              ></img>
            </div>
            <button
              onClick={(e) => clickContinue(e)}
              className="bg-tertiary rounded-xl w-full p-[16px] text-black"
            >
              Continue
            </button>
            <Link to="/dashboard">Skip</Link>
          </div>
        </div>
      </>
    );
}
export default Onboarding;