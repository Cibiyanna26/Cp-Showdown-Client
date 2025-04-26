import React from "react";
// import Logo from "../assets/svg/Devoice-White-Logo.svg";
import Logo from "@assets/logo/logo.svg";
import { Link } from "react-router-dom";

const Headder: React.FC = () => {
  return (
    <nav id="navbar" className="fixed top-0 w-full z-50">
      <div className="flex items-center justify-between p-2 my-2 mx-4 md:mx-8 bg-secondary rounded-xl shadow-md">
        {/* Left Logo Section */}
        <div id="left-logo" className="flex items-center space-x-2">
          <img className="w-[50px] h-[50px]" src={Logo} alt="Logo" />
          <Link to="/" className="text-lg md:text-xl font-bold text-white">
            SHOWDOWN
          </Link>
        </div>
        {/* Right Section */}
        <div className="relative"></div>
      </div>
    </nav>
  );
};

export default Headder;
