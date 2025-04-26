import Hero from "@/components/Dashboard/Hero";
import Footer from "@/components/Footer";
import Comparision from "@/components/Dashboard/Comparision";
import { useEffect, useState } from "react";
import Analytics from "@/components/Dashboard/Analytics";
import Headder from "@/components/Headder";
import { STATEVARIABLES, ERRORS } from "@/lib/variables";
import toast, { Toaster } from "react-hot-toast";
import DifferentMatrix from "@/components/Dashboard/DifferentMetrix";
import { UserScore, ComparableMatrix } from "@/lib/types";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const [compareLoader, setCompareLoader] = useState<boolean>(false);
  const [usernames, setUsernames] = useState<string[]>([""]);
  const [whatsHappening, setWhatsHappening] = useState<string>(STATEVARIABLES?.ENTERED);
  const [results, setResult] = useState<UserScore[]>([]);
  const [comparison_matrix, setComparisonMatrix] = useState<ComparableMatrix[]>([]);

  
  const [recentResults, setRecentResults] = useState<any>(() => {
    const storedResults = localStorage.getItem("recentResults");
    return storedResults ? JSON.parse(storedResults) : null;
  });

  // Function to add a new input field (limit 5)
  const addUser = () => {
    if (usernames.length < 5) {
      setUsernames([...usernames, ""]);
    }
  };

  const removeUser = (index: number) => {
    if (usernames.length <= 1) {
      toast.error(ERRORS?.MIN_USER);
      return;
    }
    const newUsername: string[] = [];
    usernames.forEach((value, idx) => {
      if (idx !== index) newUsername.push(usernames[idx]);
    });
    setUsernames(newUsername);
  };

  // Function to handle username input changes
  const handleUserChange = (index: number, value: string) => {
    const newUsernames = [...usernames];
    newUsernames[index] = value;
    setUsernames(newUsernames);
  };

  const handleNewResults = (value: UserScore[]) => {
    handleDashBoardState("whatsup", STATEVARIABLES?.SUCCESS);
    setResult(value);
  };

  const handleCompareLoader = (state: boolean) => {
    setCompareLoader(state);
  };

  const handleDashBoardState = (key: string, state: any) => {
    if (key === "whatsup") {
      setWhatsHappening(state);
    }
    if (key === "compare_matrix") {
      setComparisonMatrix(state);
    }
  };

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
        />

        {whatsHappening === STATEVARIABLES?.ENTERED ||
        whatsHappening === STATEVARIABLES?.FAILED ? (
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
};

export default Dashboard;
