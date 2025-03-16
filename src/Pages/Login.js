import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Login</h1>
      <button
        onClick={() => {
          navigate("/leetcodeOnboarding");
        }}
      >
        Login with Google
      </button>
    </>
  );
};

export default Login;
