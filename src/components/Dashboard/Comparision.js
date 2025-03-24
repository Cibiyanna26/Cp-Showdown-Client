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

    useEffect(() => {
      console.log("results", results);
    }, [results]);

    return (
      <>
        <div
          className="flex items-center justify-center min-h-screen"
          style={{
            backgroundImage: `url(${mid_background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col space-y-6 mt-[120px]">
            {/* title result */}
            <h1 className="text-[48px] font-extrabold text-gold text-center">
              Results
            </h1>
            {/* results of the compared user */}
            <div className="flex flex-row justify-center space-x-8 w-[900px] overflow-hidden">
              {/* cards of result */}
              {results &&
                results.slice(currentIndex, currentIndex + 2).map((value, index) => (
                  <>
                    <ScoreCard key={index} stats={value} />
                    {index === 0 && <img src={vs}></img>}
                  </>
                ))}
            </div>
            {/* navigation to see all user scores */}
            <div className="flex justify-between">
              <div
                className={`flex flex-row space-x-4 items-center ${
                  currentIndex === 0 ? "opacity-50 pointer-events-none" : ""
                }`}
                onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
              >
                <img src={left_arrow}></img>
                <p className="text-xl font-bold">Prev</p>
              </div>
              <div className="text-xl font-bold">
                {currentIndex + 1} vs {currentIndex + 2}
              </div>
              <div
                className={`flex flex-row space-x-4 items-center ${
                  currentIndex + 2 >= results.length
                    ? "opacity-50 pointer-events-none"
                    : ""
                }`}
                onClick={() =>
                  setCurrentIndex((prev) =>
                    Math.min(prev + 1, results.length - 2)
                  )
                }
              >
                <p className="text-xl font-bold">Next</p>
                <img src={right_arrow}></img>
              </div>
            </div>
            <div className="flex flex-col space-y-2 items-center justify-center">
              <h1 className="text-[#B0BEC5]">10 facts of comparison</h1>
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