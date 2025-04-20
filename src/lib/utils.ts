import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { BACKEND_LOCAL_HOST, BACKEND_URL } from "./variables";
import { FetchCompareUserResponse } from "@lib/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


const fetchCompareUser = async (
  usernames: string[]
): Promise<FetchCompareUserResponse> => {
  try {
    const accessToken = sessionStorage.getItem("access_token"); // Retrieve access token from local storage
    const res = await fetch(
      `${BACKEND_URL || BACKEND_LOCAL_HOST}/protected-route/compareGlobal`,
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

    if (res.status !== 200) {
      return {
        valid: false,
        status: res.status,
        error: data.error,
      };
    }

    return {
      valid: true,
      data: data.data,
      additional_matrix: data?.comparable_matrix,
    }; // Return the response data with a valid attribute
  } catch (error: any) {
    console.error("Failed to fetch comparison data:", error.message);
    return { valid: false, error: error.message }; // Return valid as false with the error message
  }
};

export { fetchCompareUser };