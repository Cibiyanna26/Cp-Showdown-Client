import { BACKEND_LOCAL_HOST } from "../contexts/variables";
const isLoggedIn = async () => {
  const accessToken = sessionStorage.getItem("access_token");
  if (!accessToken) {
    return false;
  }
  try {
    const response = await fetch(
      `${BACKEND_LOCAL_HOST}/protected-route/v1/profile`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    console.log("data",data.user);
    return  data; // Assuming the backend returns { valid: true/false }
  } catch (error) {
    console.error("Error verifying token:", error);
    return {valid:false};
  }
};


export {
    isLoggedIn
}