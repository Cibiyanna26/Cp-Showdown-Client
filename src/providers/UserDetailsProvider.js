import React, { useEffect, useState, useCallback } from "react";
import UserDetailsContext from "../contexts/userDetailscontext";
import { isLoggedIn } from "../utils/auth.service";
import Filler from "../components/Filler";
import mid_background from '../assets/mid-page-bg.png'

const UserDetailsProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  const updateUserDetails = useCallback((details) => {
    setUserDetails(details);
  }, []);

  const updateLoginStatus = useCallback((status) => {
    setIsVerified(status);
  }, []);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const loggedIn = await isLoggedIn();
        if (!loggedIn?.valid) {
          setUserDetails(null);
          setIsVerified(false);
        } else {
          setUserDetails({
            name: loggedIn.user?.username || "",
            picture: loggedIn.user?.picture || "",
            email: loggedIn.user?.email || "",
          });
          setIsVerified(true);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
        setUserDetails(null);
        setIsVerified(false);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []); // Empty dependency array ensures this runs only once

  if (loading){return (
    <div
      style={{
        backgroundImage: `url(${mid_background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-secondary min-h-screen flex justify-center items-center text-white"
    >
      <Filler></Filler>
    </div>
  );};

  return (
    <UserDetailsContext.Provider
      value={{ userDetails, isVerified, updateUserDetails, updateLoginStatus }}
    >
      {children}
    </UserDetailsContext.Provider>
  );
};

export default UserDetailsProvider;
