import React, { useEffect, useState, useCallback } from "react";
import UserDetailsContext from "../contexts/userDetailscontext";
import { isLoggedIn } from "../utils/auth.service";

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

  if (loading) return <div>Loading...</div>;

  return (
    <UserDetailsContext.Provider
      value={{ userDetails, isVerified, updateUserDetails, updateLoginStatus }}
    >
      {children}
    </UserDetailsContext.Provider>
  );
};

export default UserDetailsProvider;
