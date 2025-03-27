import { BACKEND_LOCAL_HOST, BACKEND_URL } from "../contexts/variables";

const fetchCompareUser = async (usernames,type) => {
  try {
    const accessToken = sessionStorage.getItem("access_token"); // Retrieve access token from local storage
    console.log(`${BACKEND_LOCAL_HOST}/protected-route/compare${type}`)
    const res = await fetch(
      `${BACKEND_URL || BACKEND_LOCAL_HOST}/protected-route/compare${type}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`, // Include access token in the Authorization header
        },
        body: JSON.stringify({ data: usernames }), // Send usernames in the request body
      }
    );

    const data = await res.json();

    if (res.status!=200) {
      return {
        valid:false,
        status:res.status,
        message:data.message
      }
    }
    console.log(res.status,data)
    return { valid: true, data: data.data }; // Return the response data with a valid attribute
  } catch (error) {
    console.error("Failed to fetch comparison data:", error.message);
    return { valid: false, error: error.message }; // Return valid as false with the error message
  }
};


export { fetchCompareUser };