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
          className="min-h-screen px-4"
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
            <div className="flex flex-row items-center md:space-x-8 space-y-4 justify-center">
              {/* cards of result */}
                {results &&
                  results
                    .slice(currentIndex, currentIndex + cardLimit)
                    .map((value, index) => (
                      <>
                        <ScoreCard key={index} stats={value} />
                        {cardLimit > 1 && results.length > 1 && index === 0 && (
                          <img src={vs} className="w-[100px] h-[100px]"></img>
                        )}
                      </>
                    ))}
            </div>
            {/* navigation to see all user scores */}
            <div className="flex justify-between">
              {/* Left Navigation of the Score Cards */}
              <div
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
              </div>

              {/* Current Compared Ranks */}

              {cardLimit == 1 || results.length <= 1 ? (
                <></>
              ) : (
                <div className="text-xl font-bold">
                  {currentIndex + 1} vs {currentIndex + 2}
                </div>
              )}
              {/* Right Navigation of the Score Cards */}
              <div
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
              </div>
            </div>
            <div
              className="flex flex-col space-y-2 items-center justify-end flex-1"
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
            </div>
          </div>
        </div>
      </>
    );
};
export default Comparision;