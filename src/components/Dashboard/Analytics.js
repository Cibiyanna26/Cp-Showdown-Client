import RadarChartComponent from "../RadarChart";
import mid_background from "../../assets/mid-page-bg.png";
import { useEffect, useState } from "react";


const Analytics = ({
    results
}) =>{

    const [focusedUser, setFocusedUser] = useState(0);
    const [currentStats, setCurrentStats] = useState(null);
    const [radarResults, setRadarResults] = useState({
      labels:['easy', 'medium', 'hard', 'easyAC', 'mediumAC','hardAC','rating'],
      datasets:[]
    })

    // useEffect(() =>{

    // }, [focusedUser])

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
          <div className="flex flex-col space-y-4 w-[900px] mx-auto mt-[80px]">
            <div className="border-b border-tertiary flex justify-around p-[8px]  mb-[40px]">
              {results &&
                results.map((value, index) => {
                  return (
                    <div key={index}>
                      <button
                        className={`${
                          focusedUser == index
                            ? "text-primary"
                            : "text-secondary"
                        } text-xl font-bold transition`}
                        onClick={() => {
                          setFocusedUser(index);
                        }}
                      >
                        {value?.userId}
                      </button>
                    </div>
                  );
                })}
            </div>
            <div className="flex flex-row space-x-4">
              <div className="w-1/2">
                <RadarChartComponent usersData={results} focusedUser={focusedUser}/>
              </div>
              <div className="w-1/2">{}</div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Analytics;