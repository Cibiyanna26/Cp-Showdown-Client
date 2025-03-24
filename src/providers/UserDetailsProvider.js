import React, { useEffect, useState } from "react";
import UserDetailsContext from "../contexts/userDetailscontext";
import { isLoggedIn } from "../utils/auth.service";

const UserDetailsProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  // Function to update user details
  const updateUserDetails = (details) => {
    setUserDetails(details);
  };

  // Function to update login status
  const updateLoginStatus = (status) => {
    setIsVerified(status);
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const loggedIn = await isLoggedIn();
        console.log("API Response:", loggedIn); // Debugging step
        if (!loggedIn || !loggedIn.valid) {
          console.log("User is not logged in");
          setUserDetails(null);
          setIsVerified(false);
        } else {
          setUserDetails({
            name: loggedIn?.user?.username || "",
            picture: loggedIn?.user?.picture || "",
            email: loggedIn?.user?.email || "",
          });
          setIsVerified(true);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
        setUserDetails(null);
        setIsVerified(false);
      } finally {
        setLoading(false); // Ensure loading is set to false in all cases
      }
    };

    fetchUserDetails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <UserDetailsContext.Provider
      value={{
        userDetails,
        isVerified,
        updateUserDetails,
        updateLoginStatus,
      }}
    >
      {children}
    </UserDetailsContext.Provider>
  );
};

export default UserDetailsProvider;
