import React, { useState } from "react";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";


const App = () =>{
  const [googleAuthUri, setGoogleAuthUri] = useState("");

  

  useEffect(()=>{
    getGoogleAuthUri();
  },[]);  

  return(
    <>  
      <h1>Helloworld</h1>
    </>
  )
}

export default App;
