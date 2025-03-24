import React, { useState } from "react"
import { redirect, useNavigate, Navigate } from "react-router-dom"
import background_image from '../assets/landing-background-cross.png'
import Logo from '../assets/Devoice-White-Logo.png';
import google_icon from '../assets/icons8-google 1.svg'
import { BACKEND_LOCAL_HOST } from "../contexts/variables";

async function getGoogleUri(){
  var data = await fetch(`${BACKEND_LOCAL_HOST}/auth`,{
    method:"post"
  })
  data = await data.json();
  return data;
}

const Login = () => {
    const navigate = useNavigate()
    const signInText = 'Sign in with Google';
    const loadingText = 'Loading ...';
    const [loginButtonText, setLoginButtonText] = useState(signInText);

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoginButtonText(loadingText)
        try{
          const googleRedirectUri = await getGoogleUri();
          console.log(googleRedirectUri)
          if(!googleRedirectUri.valid){
            setLoginButtonText(signInText)
          }else{
             window.location.href = googleRedirectUri.url;
          }
          console.log(googleRedirectUri);
        }
        catch(err){ 
          setLoginButtonText(signInText)
        }
        // Add login logic here
        // navigate("/onboarding") // Navigate to dashboard after login
    }

    return (
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
          <h1 className="text-3xl font-bold stroke-secondary">Sign In</h1>
          <p className=" font-semibold">
            Sign in to compare your cp performance with the world
          </p>
          <button 
                onClick={(e)=>{
                    handleLogin(e);
                }}

                className="flex items-center space-x-6 bg-secondary 
                            border-2 border-tertiary p-[8px] rounded-xl">
            <img src={google_icon}></img>
            <span className="text-xl font-semibold">{loginButtonText}</span>
          </button>
        </div>
      </div>
    );
}

export default Login