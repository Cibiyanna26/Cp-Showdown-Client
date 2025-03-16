import { useState, useEffect } from "react";


const Login = () =>{

    const [googleAuthUri, setGoogleAuthUri] = useState(null);

    async function getGoogleAuthUri() {
        fetch('http://localhost:5000/')
    }

    useEffect(()=>{
        getGoogleAuthUri();
    }, [])
    return (
        <>
            Helloworld
        </>
    )
}

export default Login;