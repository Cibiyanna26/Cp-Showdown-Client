import background_image from "../assets/landing-background-cross.png";
import Logo from "../assets/Devoice-White-Logo.png";
import { Link } from "react-router-dom";
import drop_down from "../assets/icon _chevron bottom_.svg";
import useUserDetails from "../hooks/useUserDetails"; 
import { useState } from "react";
import logout_icon from '../assets/logout-icon.png'

const Headder = () => {
  const { userDetails, isVerified, updateUserDetails, updateLoginStatus } = useUserDetails();
  const [shlogout, setLogout] = useState(true);

  const logout = () => {
    updateUserDetails(null);
    updateLoginStatus(false);
    sessionStorage.removeItem('access_token');
    setLogout(true);
    window.location.href = '/';
  };

  return (
    <nav
      id="navbar"
      className="fixed top-0 w-full z-50 border-b border-tertiary bg-secondary"
    >
      <div className="flex items-center justify-between py-2 px-4 md:px-8">
        {/* Left Logo Section */}
        <div id="left-logo" className="flex items-center space-x-2">
          <img className="w-12 h-12" src={Logo} alt="Logo" />
          <Link to="/" className="text-lg md:text-xl font-bold text-white">
            CP SHOWDOWN
          </Link>
        </div>

        {/* Right Section */}
        <div className="relative">
          <div className="flex items-center space-x-4 p-2 rounded-xl text-white ">
            {userDetails ? (
              <>
                <p className="hidden md:block text-sm md:text-base">
                  {userDetails.name}
                </p>
                <img
                  className="w-8 h-8 rounded-full"
                  src={userDetails?.picture}
                  alt="User"
                />
                <img
                  className="w-5 h-5 cursor-pointer"
                  src={drop_down}
                  alt="Dropdown"
                  onClick={() => setLogout(!shlogout)}
                />
              </>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-blue-500 rounded-md text-white text-sm md:text-base"
              >
                Log In
              </Link>
            )}
          </div>

          {/* Logout Dropdown */}
          <div className="" hidden={shlogout}>
            <button
              onClick={() => logout()}
              className="w-full  flex flex-row space-x-2 justify-center pt-2 cursor-pointer absolute p-2 rounded-xl bg-secondary  text-white md:bottom-[-60px] bottom-[-50px] border border-tertiary"
            >
              <h1 className="text-sm md:text-base text-white">Logout</h1>
              <img src={logout_icon} className="w-[20px] h-[20px]"></img>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Headder;