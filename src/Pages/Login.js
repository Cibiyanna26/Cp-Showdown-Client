import React, { useState } from "react";
import { redirect, useNavigate, Navigate } from "react-router-dom";
import background_image from "../assets/landing-background-cross.png";
import Logo from "../assets/Devoice-White-Logo.png";
import google_icon from "../assets/icons8-google 1.svg";
import { BACKEND_LOCAL_HOST, BACKEND_URL } from "../contexts/variables";
import toast, { Toaster } from "react-hot-toast";
import Headder from "../components/Headder";


async function getGoogleUri() {
  var data = await fetch(`${BACKEND_URL || BACKEND_LOCAL_HOST}/auth`, {
    method: "post",
  });
  data = await data.json();
  return data;
}

const Login = () => {
  const navigate = useNavigate();
  const signInText = "Sign in with Google";
  const loadingText = "Loading ...";
  const [loginButtonText, setLoginButtonText] = useState(signInText);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginButtonText(loadingText);
    try {
      const googleRedirectUri = await getGoogleUri();
      console.log(googleRedirectUri);
      if (!googleRedirectUri.valid) {
        setLoginButtonText(signInText);
      } else {
        window.location.href = googleRedirectUri.url;
      }
      console.log(googleRedirectUri);
    } catch (err) {
      setLoginButtonText(signInText);
      console.log("err", err);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${background_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Headder/>
      <Toaster />
      <div
        className="flex flex-col max-w-md w-full p-6 sm:p-8 space-y-6 bg-primary rounded-lg shadow-md opacity-90
                 items-center justify-center
                 text-white text-center"
      >
        <img src={Logo} className="w-20 h-20 sm:w-24 sm:h-24" alt="Logo" />
        <h1 className="text-2xl sm:text-3xl font-bold stroke-secondary">
          Sign In
        </h1>
        <p className="text-sm sm:text-base font-semibold">
          Sign in to compare your cp performance with the world
        </p>
        <button
          onClick={(e) => {
            handleLogin(e);
          }}
          className="flex items-center space-x-4 sm:space-x-6 bg-secondary 
                            border-2 border-tertiary p-2 sm:p-3 rounded-xl w-full"
        >
          <img src={google_icon} className="w-6 h-6 sm:w-8 sm:h-8" alt="Google Icon" />
          <span className="text-sm sm:text-xl font-semibold">{loginButtonText}</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
