import background_image from "../assets/landing-background-cross.png";
import Logo from "../assets/Devoice-White-Logo.png";
import { Link, useNavigate } from "react-router-dom";
import drop_down from "../assets/icon _chevron bottom_.svg";
import leetcode_icon from "../assets/leetcode.svg";
import useUserDetails from "../hooks/useUserDetails"; 
import { useState } from "react";

const Headder = ()=> {
    const { userDetails, isVerified, updateUserDetails, updateLoginStatus } = useUserDetails();
    const [shlogout,setLogout] = useState(true)
    const logout = () => {
      updateUserDetails(null)
      updateLoginStatus(false)
      console.log(sessionStorage.getItem('access_token'))
      sessionStorage.removeItem('access_token')
      console.log(sessionStorage.getItem('access_token'))
      setLogout(true)
      window.location.href = '/'
    }
    return (
        <nav id="navbar" className="bg-transparent fixed top-0 w-full">
          <div className="flex items-center justify-between py-[8px] md:px-[20px] px-[10px]">
            <div id="left-logo " className="flex flex-row items-center">
              <img className="w-[60px] h-[60px]" src={Logo}></img>
              <Link to={"/"} className="md:text-xl text- font-bold">
                CP SHOWDOWN
              </Link>
            </div>
            <div>
              <div className="flex flex-row items-center space-x-4 p-[8px] rounded-xl text-white opacity-70 border-2">
                {userDetails ? (
                  <>
                    <p>{userDetails.name}</p>
                    <img
                      className="w-[30px] h-[30px] rounded-full"
                      src={userDetails?.picture}
                    ></img>
                    <img 
                      className="w-[20px] h-[20px]"
                      src={drop_down}
                      onClick={()=>setLogout(!shlogout)}
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
              
              <div hidden={shlogout} onClick={()=>logout()} className="w-full text-center pt-[15px] opacity-70">
                <h1>Logout</h1>
              </div>
            </div>
          </div>
        </nav>
    )
}

export default Headder;