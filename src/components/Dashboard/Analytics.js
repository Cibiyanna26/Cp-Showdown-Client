import RadarChartComponent from "../RadarChart";
import mid_background from "../../assets/mid-page-bg.png";
import { useEffect, useState } from "react";


const Analytics = ({
    usernames,
    results
}) =>{

    const [focusedUser, setFocusedUser] = useState(usernames[0]);
    const [currentStats, setCurrentStats] = useState(null);
    useEffect(()=>{
        console.log("results", results)
        const focusedUserScore = results.filter(element => {
            return focusedUser == element.userId
        });
        setCurrentStats(focusedUserScore[0]);
        console.log("current focused user score ",currentStats)
    },[focusedUser])

    return (
      <>
        <div
          className="flex min-h-screen"
          style={{
            backgroundImage: `url(${mid_background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col space-y-4 justify-center w-[900px] mx-auto mt-[80px]">
            <div className="border-b border-tertiary flex justify-around p-[8px]">
              {usernames &&
                usernames.map((value, index) => {
                  return (
                    <div key={index}>
                      <button className={`${focusedUser == value ? 'text-primary' : "text-secondary"} text-xl font-bold transition`}
                        onClick={()=>{
                            setFocusedUser(usernames[index]);
                        }}
                      >
                        {value}
                      </button>
                    </div>
                  );
                })}
            </div>
            <div className="flex flex-row space-x-4">
              <div className="w-1/2">
                <RadarChartComponent />
              </div>
              <div className="w-1/2">
                <ul>
                  <li>helloworld</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Analytics;