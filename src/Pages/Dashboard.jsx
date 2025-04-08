
import Hero from "../components/Dashboard/Hero";
import Footer from "../components/Footer";
import Comparision from "../components/Dashboard/Comparision";
import { useEffect, useState } from "react";
import useUserDetails from "../hooks/useUserDetails";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import Analytics from "../components/Dashboard/Analytics";
import Headder from "../components/Headder";
import { STATEVARIABLES, ERRORS } from "../contexts/variables";
import toast, { Toaster } from "react-hot-toast";
import DifferentMatrix from "../components/Dashboard/DifferentMetrix";

const Dashboard = () => {
  const { userDetails, isVerified, updateLoginStatus, updateUserDetails } = useUserDetails();
  const [compareLoader, setCompareLoader] = useState(false);
  const [usernames, setUsernames] = useState([""]);
  const [whatsHappening, setWhatsHappening] = useState(STATEVARIABLES?.ENTERED);
  const [results, setResult] = useState([]);
  const [comparison_matrix, setComparisonMatrix] = useState([]);
  // recent Results

  const [recentResults, setRecentResults] = useState(() => {
    const storedResults = localStorage.getItem("recentResults");
    return storedResults ? JSON.parse(storedResults) : null;
  });
  const [searchParams] = useSearchParams();
  const nav = useNavigate()
  useEffect(()=>{
    const access_token = searchParams.get("accessToken");
    if (access_token) {
      sessionStorage.setItem("access_token", access_token);
      updateLoginStatus(true)
      updateUserDetails(
        {
          name: searchParams.get("name"),
          picture: searchParams.get("picture"),
          email: searchParams.get("email")
        }
      )
      nav('/dashboard')
    }
    else if (sessionStorage.getItem("access_token")==null){
      window.location.href = '/'
    }
    // if (!isVerified) {
    //   window.location.href = "/";
    // }
  }, [userDetails, isVerified]);

  // Function to add a new input field (limit 5)
  const addUser = () => {
    if (usernames.length < 5) {
      setUsernames([...usernames, ""]);
    }
  };

   const removeUser = (index) => {
    if(usernames.length <=1) {
      toast.error(ERRORS?.MIN_USER);
      return;
    }
     const newUsername = [];
     usernames.forEach((value, idx) => {
       if (idx != index) newUsername.push(usernames[idx]);
     });
     setUsernames(newUsername);
   };

   // Function to handle username input changes
   const handleUserChange = (index, value) => {
     const newUsernames = [...usernames];
     newUsernames[index] = value;
     setUsernames(newUsernames);
   };

  const handleNewResults = (value) =>{
    handleDashBoardState("whatsup", STATEVARIABLES?.SUCCESS);
    setResult(value);
  }

  const handleCompareLoader = (state)=>{
    setCompareLoader(state);
  }

  const handleDashBoardState = (key, state) =>{
    if (key === "whatsup") {
      setWhatsHappening(state);
    }
    if( key === "compare_matrix"){
      setComparisonMatrix(state);
    }
  }


  useEffect(() => {
    if (whatsHappening === STATEVARIABLES?.SUCCESS) {
      const comparisonDiv = document.getElementById("comparision");
      if (comparisonDiv) {
        comparisonDiv.scrollIntoView({ behavior: "smooth" });
      }
      setWhatsHappening(STATEVARIABLES?.NEUTRAL);
      
    }
  }, [whatsHappening, results]);


  return (
    <>
      <section className="landing page text-white cursor-custom ">
        <Toaster />
        <Headder />
        <Hero
          usernames={usernames}
          addUser={addUser}
          removeUser={removeUser}
          handleUserChange={handleUserChange}
          handleNewResults={handleNewResults}
          compareLoader={compareLoader}
          handleCompareLoader={handleCompareLoader}
          handleDashBoardState={handleDashBoardState}
          recentResults={recentResults}
          setRecentResults={setRecentResults}
          results={results}
        />

        {whatsHappening == STATEVARIABLES?.ENTERED ||
        whatsHappening == STATEVARIABLES?.FAILED ? (
          <></>
        ) : (
          <>
            <Comparision
              usernames={usernames}
              results={results}
              compareLoader={compareLoader}
              handleDashBoardState={handleDashBoardState}
            />
            <Analytics
              usernames={usernames}
              results={results}
              compareLoader={compareLoader}
            />
            <DifferentMatrix comparable_matrix={comparison_matrix} />
            <Footer />
          </>
        )}
      </section>
    </>
  );
}

export default Dashboard;