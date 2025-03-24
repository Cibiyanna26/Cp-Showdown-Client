import { BACKEND_LOCAL_HOST } from "../contexts/variables";

const fetchCompareUser = async (usernames) => {
  try {
    const accessToken = sessionStorage.getItem("access_token"); // Retrieve access token from local storage
    const res = await fetch(
      `${BACKEND_LOCAL_HOST}/protected-route/compare`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`, // Include access token in the Authorization header
        },
        body: JSON.stringify({ data: usernames }), // Send usernames in the request body
      }
    );

    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return { valid: true, data: data.data }; // Return the response data with a valid attribute
  } catch (error) {
    console.error("Failed to fetch comparison data:", error.message);
    return { valid: false, error: error.message }; // Return valid as false with the error message
  }
};


export { fetchCompareUser };