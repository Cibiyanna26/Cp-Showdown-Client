import { useContext } from "react";
import UserDetailsContext from "../contexts/userDetailscontext";

const useUserDetails = () => {
  return useContext(UserDetailsContext);
};

export default useUserDetails;
