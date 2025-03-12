import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import {client_id, client_secret, redirect_uri} from './context/cerdentails'

function App() {
  return (
    <GoogleOAuthProvider clientId={client_secret}>
      <div>
        <h2>Login with Google</h2>
        <GoogleLogin
          onSuccess={(response) => {
            console.log("Google Login Success:", response.credential);

            // Send the token to the backend
            fetch("http://localhost:5000/auth/google", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ token: response.credential }),
            })
              .then((res) => res.json())
              .then((data) => console.log("Backend Response:", data))
              .catch((err) => console.error("Error:", err));
          }}
          onError={() => console.log("Login Failed")}
        />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
