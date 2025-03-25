import RadarChartComponent from "../RadarChart";
import mid_background from "../../assets/mid-page-bg.png";
import { useEffect, useState } from "react";
import tick_icon from '../../assets/tick-ico.svg';
import tick_icon_grd from '../../assets/tick-icon-gradient.png'
const Analytics = ({ results }) => {
  const [focusedUser, setFocusedUser] = useState(0);

  return (
    <>
      <div
        className="flex min-h-screen px-4"
        style={{
          backgroundImage: `url(${mid_background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="analytics-section"
      >
        <div className="flex flex-col space-y-4 w-full max-w-[900px] mx-auto mt-[80px] ">
          {/* User Selection Buttons */}
          <div className="border-b border-tertiary flex flex-wrap justify-around p-[8px] mb-[40px]">
            {results &&
              results.map((value, index) => {
                return (
                  <div key={index} className="mb-2 sm:mb-0">
                    <button
                      className={`${
                        focusedUser === index
                          ? "text-primary"
                          : "text-secondary"
                      } text-lg sm:text-xl font-bold transition`}
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

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            {/* Radar Chart */}
            <div className="w-full lg:w-1/2">
              <RadarChartComponent
                usersData={results}
                focusedUser={focusedUser}
              />
            </div>

            {/* Metrics List */}
            <div className="w-full lg:w-1/2 pl-0 lg:pl-10">
              <div className="list-disc">
                {results[focusedUser]?.metrices?.map((element, index) => {
                  return (
                    <div key={index} className="mb-4">
                      <h1 className="text-base sm:text-lg text-blue-300">
                       <img src={tick_icon_grd} className="inline w-[30px] h-[30px] md:w-[40px] md:h-[40px]"></img> {element.title}
                      </h1>
                      <p
                        className="pl-2 text-sm sm:text-base"
                        dangerouslySetInnerHTML={{ __html: element.message }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
