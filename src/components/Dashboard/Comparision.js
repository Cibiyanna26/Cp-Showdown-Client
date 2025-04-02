import mid_background from "../../assets/mid-page-bg.png";
import vs from "../../assets/vs.svg";
import demo_score_1 from "../../assets/demo-score-1.svg";
import demo_score_2 from "../../assets/demo-score-2.svg";
import SemiCircularProgress from "../SemiCircularProgress";
import right_arrow from '../../assets/right-arrow.svg'
import left_arrow from '../../assets/left-arrow.svg'
import look_down_arrow from '../../assets/look-down.svg'
import ScoreCard from "../ScoreCard";
import { useEffect } from "react";
import { useState } from "react";
import { COLORS } from "../../contexts/variables";

const Comparision = ({ results }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardLimit, setCardLimit] = useState(0);

    useEffect(() => {
      const updateCardLimit = () => {
        if (window.innerWidth < 1024) {
          setCardLimit(1);
        } else {
          setCardLimit(2);
        }
      };

      updateCardLimit();
      window.addEventListener("resize", updateCardLimit);

      return () => {
        window.removeEventListener("resize", updateCardLimit);
      };
    }, []);
    return (
      <>
        <div
          className="px-4 relative"
          style={{
            backgroundImage: `url(${mid_background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          id="comparision"
        >
          <div className="pt-[30px] lg:w-[900px] w-full mx-auto space-y-4">
            {/* title result */}
            <h1 className="text-[48px] font-extrabold text-gold text-center">
              Results
            </h1>
            {/* results of the compared user */}
            <div className="flex flex-col items-center md:w-[400px] sm:w-[350px] w-[300px] mx-auto justify-center space-y-6">
              {/* cards of result */}

              <div className="flex flex-row p-[16px] rounded-xl space-x-4 items-center w-full bg-yellow-700">
                <h1 className="w-[30px] h-[30px] rounded-full bg-yellow-500 items-center text-center">#</h1>
                <div className="flex flex-col space-y-2">
                  <h1 className="text-yellow-300">Your Rank & Score</h1>
                  <h1 className="md:text-xl text-sm">Based on your Comparisions</h1>
                </div>
              </div>
              {results &&
                results.map((value, index) => {
                  return (
                    <>
                      <div className="p-[16px] flex flex-row justify-between w-full bg-secondary rounded-xl">
                        <div className="flex flex-row space-x-4">
                          {/* <img
                            src={mid_background}
                            className="w-[30px] h-[30px] rounded-full"
                          ></img> */}
                          <h1 className="text-green-500">#{value?.rank}</h1>
                          <img
                            src={value?.profile?.profile?.userAvatar}
                            className="w-[30px] h-[30px] rounded-full"
                          ></img>
                          <h1 className="md:text-lg text-sm">{value?.userId}</h1>
                        </div>
                        <div>
                          <h1 className="text-blue-500">{value?.score}</h1>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
            {/* navigation to see all user scores */}
            <div className="flex justify-between">
              {/* Left Navigation of the Score Cards */}
              {/* <div
                className={`flex flex-row space-x-4 items-center ${
                  currentIndex === 0 ? "opacity-50 pointer-events-none" : ""
                }`}
                onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
              >
                <img
                  src={left_arrow}
                  className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
                ></img>
                <p className="md:text-xl text-lg font-bold">Prev</p>
              </div> */}

              {/* Current Compared Ranks */}

              {/* {cardLimit == 1 || results.length <= 1 ? (
                <></>
              ) : (
                <div className="text-xl font-bold">
                  Player {currentIndex + 1} vs Player {currentIndex + 2}
                </div>
              )} */}
              {/* Right Navigation of the Score Cards */}
              {/* <div
                className={`flex flex-row space-x-4 items-center ${
                  currentIndex + cardLimit >= results.length
                    ? "opacity-50 pointer-events-none"
                    : ""
                }`}
                onClick={() =>
                  setCurrentIndex((prev) =>
                    Math.min(prev + 1, results.length - cardLimit)
                  )
                }
              >
                <p className="md:text-xl text-lg font-bold">Next</p>
                <img
                  src={right_arrow}
                  className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
                ></img>
              </div> */}
            </div>
            {/* <div
              className="flex flex-col space-y-2 absolute bottom-8 left-[43%] items-center"
              onClick={() => {
                const comparisonDiv =
                  document.getElementById("analytics-section");
                if (comparisonDiv) {
                  comparisonDiv.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <h1 className="text-[#B0BEC5]">7 facts of comparison</h1>
              <button>
                <img src={look_down_arrow} className="w-[50px] h-[50px]"></img>
              </button>
            </div> */}
          </div>
        </div>
      </>
    );
};
export default Comparision;