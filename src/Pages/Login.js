import React from "react";
import { useNavigate } from "react-router-dom";

function navigate(url) {
  window.location.href = url;
}


async function auth() {
  const response = await fetch("http://localhost:5000/auth/v1", {
    method: "post",
  });

  const data = await response.json();
  navigate(data.url);
}


const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Welcome to Consulting Ninja!</h1>
      <h3>Google OAuth!</h3>
      <p>
        Visit{" "}
        <a href="https://www.youtube.com/@ConsultingNinja/featured">
          <strong>@ConsultingNinja</strong>
        </a>{" "}
        to see more great videos!
      </p>

      <button className="btn-auth" type="button" onClick={() => auth()}>
        {/* <img className="btn-auth-img" src={googleButton} alt="google sign in" /> */}
        Google sign in
      </button>
    </>
  );
};

export default Login;
