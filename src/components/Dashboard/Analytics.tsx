import RadarChartComponent from "@components/RadarChart";
import mid_background from "@assets/png/mid-page-bg.png";
import tick_icon_grd from "@assets/svg/tick-icon-gradient.svg";
import { COLORS } from "@lib/variables";
import {  useState } from "react";
import { AnalyticsProps, UserScore } from "@/lib/types";

const Analytics: React.FC<AnalyticsProps> = ({ usernames, results, compareLoader }) => {
  const [focusedUser, setFocusedUser] = useState<number>(0);

  return (
    <>
      <div
        className="flex px-4"
        style={{
          backgroundImage: `url(${mid_background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="analytics-section"
      >
        <div className="flex flex-col space-y-4 w-full max-w-[900px] mx-auto md:mt-[40px] mt-[20px]">
          {/* User Selection Buttons */}
          <h1 className="text-3xl font-bold text-center">Analytics</h1>
          <p className="text-center text-gray-400">7 different Comparisons</p>
          <div className="border-b border-tertiary flex flex-wrap justify-around p-[8px] mb-[40px]">
            {results &&
              results.map((value: UserScore, index: number) => (
                <div key={index} className="mb-2 sm:mb-0">
                  <button
                    className={ `text-lg sm:text-xl font-bold transition`}
                    style={{
                      color: focusedUser == index ? COLORS[index].border : COLORS[index].background,
                    }}
                    onClick={() => setFocusedUser(index)}
                  >
                    {value?.userId}
                  </button>
                </div>
              ))}
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            {/* Radar Chart */}
            <div className="w-full lg:w-1/2">
              <RadarChartComponent
                usersData={results}
                focusedUser={focusedUser}
              />
              <div className="flex flex-row justify-center space-x-6">
                {results &&
                  results.map((value, index) => (
                    <div
                      key={index}
                      style={{
                        color:
                          focusedUser === index
                            ? COLORS[index].activeBackground
                            : COLORS[index].background,
                      }}
                    >
                      {value?.score || "Unknown User"}
                    </div>
                  ))}
              </div>
            </div>

            {/* Metrics List */}
            <div className="w-full lg:w-1/2 pl-0 lg:pl-10">
              <div className="list-disc">
                {results[focusedUser]?.metrices?.map((element, index) => (
                  <div key={index} className="mb-4">
                    <h1 className="text-base sm:text-lg text-blue-300">
                      <img
                        src={tick_icon_grd}
                        className="inline w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
                        alt="tick"
                      />{" "}
                      {element.title}
                    </h1>
                    <p
                      className="pl-2 text-sm sm:text-base"
                      dangerouslySetInnerHTML={{ __html: element.message }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
