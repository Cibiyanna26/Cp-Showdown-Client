import React from "react";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";

const clientId =
  "455082523649-7ljjjagb1ar3avku87e4jtr6bkvl8rga.apps.googleusercontent.com"; // No secret here

function LoginButton() {
  const login = useGoogleLogin({
    flow: "auth-code",
    redirect_uri: "http://localhost:3000/callback",
    onSuccess: (response) => {
      console.log("Authorization Code:", response.code);
      fetch("http://localhost:5000/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: response.code }),
      })
        .then((res) => res.json())
        .then((data) => console.log("Backend Response:", data))
        .catch((err) => console.error("Error:", err));
    },
    onError: () => console.log("Login Failed"),
  });

  return <button onClick={login}>Login with Google</button>;
}

function App() {

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div>
        <h2>Login with Google</h2>
        <LoginButton/>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
