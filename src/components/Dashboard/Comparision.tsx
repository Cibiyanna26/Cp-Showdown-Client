import mid_background from "@/assets/png/mid-page-bg.png";
import { useEffect, useState } from "react";
import { COLORS } from "@/lib/variables";
import { ComparisionProps } from "@/lib/types";


const Comparision: React.FC<ComparisionProps> = ({
  results,
  usernames,
  compareLoader,
  handleDashBoardState,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [cardLimit, setCardLimit] = useState<number>(0);

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
        className="flex flex-col px-4 relative"
        style={{
          backgroundImage: `url(${mid_background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="comparision"
      >
        <div className="lg:w-[900px] w-full mx-auto space-y-4 md:mt-[40px] my-[20px]">
          {/* title result */}
          <h1 className="text-[48px] font-extrabold text-gold text-center">
            Results
          </h1>
          {/* Loader */}
          {compareLoader && (
            <div className="text-center text-yellow-500">Loading...</div>
          )}
          {/* results of the compared user */}
          <div className="flex flex-col items-center md:w-[400px] sm:w-[350px] w-[300px] mx-auto justify-center space-y-6">
            {/* cards of result */}
            <div className="flex flex-row p-[16px] rounded-xl space-x-4 items-center w-full bg-yellow-700">
              <h1 className="w-[30px] h-[30px] rounded-full bg-yellow-500 items-center text-center">
                #
              </h1>
              <div className="flex flex-col space-y-2">
                <h1 className="text-yellow-300">Your Rank & Score</h1>
                <h1 className="md:text-xl text-sm">
                  Based on your Comparisions
                </h1>
              </div>
            </div>
            {results &&
              results.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="p-[16px] relative md:h-[130px] h-[120px] flex flex-col justify-between w-full rounded-xl"
                    style={{
                      background: COLORS[index]?.background,
                      border: COLORS[index]?.border,
                      boxShadow: `0px 6px 0px 0px ${COLORS[index]?.border}`,
                    }}
                  >
                    <div>
                      <h1
                        className="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-center"
                        style={{
                          color: COLORS[index]?.border,
                        }}
                      >
                        {value?.funnyUserName}
                      </h1>
                    </div>
                    <div className="flex flex-row justify-between w-full">
                      <div className="flex flex-row space-x-4">
                        <h1
                          style={{
                            color: COLORS[index]?.border,
                            borderRadius: "16px",
                          }}
                        >
                          #{value?.rank}
                        </h1>
                        <img
                          src={value?.userAvatar}
                          className="w-[30px] h-[30px] rounded-full"
                          alt="user avatar"
                        />
                        <h1 className="md:text-lg text-sm">{value?.userId}</h1>
                      </div>
                      <div>
                        <h1
                          style={{
                            color: COLORS[index]?.border,
                            borderRadius: "16px",
                          }}
                        >
                          {value?.score}
                        </h1>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          {/* Example usage of handleDashBoardState */}
          {/* <button
            onClick={() => handleDashBoardState("newState")}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Update Dashboard State
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Comparision;