import mid_background from '../../assets/mid-page-bg.png'
import left_shiba from '../../assets/shibainu/shiba_left-removebg-preview.png'
import cat_image from '../../assets/shibainu/cat_toung-removebg-preview.png'
import boxer_shiba from '../../assets/shibainu/body_builing_shiba-removebg-preview.png'
import headphone_cat from '../../assets/shibainu/cat_head_phone-removebg-preview.png'
import { useState } from 'react';
const WhatWeOffer = () => {
  const [fallText, setFallText] = useState(false);

  const handleBoxerClick = () => {
    setFallText(true);
  };
    return (
      <>
        <div
          className="flex p-4 sm:p-8 md:p-16 justify-center"
          style={{
            backgroundImage: `url(${mid_background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-7xl flex flex-col items-center mt-16 space-y-6">
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary text-center ${fallText ? 'fall' : ''}`}>
              What We Offer
            </h1>
            <div className="flex flex-wrap justify-center gap-8">
              {/* Card 1 */}
              <div
                className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] md:h-[400px] sm:h-[350px] h-[300px] bg-gradient-to-b from-[#4D065B] via-[#720986] to-[#A30DC1] rounded-xl shadow p-4 space-y-4 text-center flex flex-col justify-between"
                style={{
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06), 0 0 10px var(--tw-bg-primary)",
                }}
              >
                <div className="flex flex-1 flex-row space-x-4 items-center justify-center opacity-80">
                  <img
                    className={`${fallText ? 'fall' : ''} w-[100px] sm:w-[120px] md:w-[150px] h-[100px] sm:h-[120px] md:h-[150px] transform -rotate-45`}
                    src={left_shiba}
                    alt="Left Shiba"
                  />
                  <h1 className={`${fallText ? 'fall' : ''} font-bold text-2xl sm:text-3xl`}>vs</h1>
                  <img
                    className={`${fallText ? 'fall' : ''} w-[100px] sm:w-[120px] md:w-[150px] h-[100px] sm:h-[120px] md:h-[150px] transform rotate-45`}
                    src={cat_image}
                    alt="Cat"
                  />
                </div>
                <div className="space-y-4">
                  <h1 className={`${fallText ? 'fall' : ''} text-center font-bold text-xl sm:text-2xl md:text-3xl`}>
                    Friends Showdown
                  </h1>
                  <p className={`${fallText ? 'fall' : ''} text-sm sm:text-base opacity-80 `}>
                    Have a Showdown Contest with your friends and know your
                    friends' scores.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px]  md:h-[400px] sm:h-[350px] h-[300px] bg-gradient-to-b from-[#4D065B] via-[#720986] to-[#A30DC1] rounded-xl shadow p-4 space-y-4 text-center flex flex-col justify-between"
                style={{
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06), 0 0 10px var(--tw-bg-primary)",
                }}
              >
                <div className="flex flex-1 flex-row space-x-4 items-center justify-center opacity-80">
                  <img onClick={handleBoxerClick}
                    className={`cursor-pointer transition-all duration-500 transform ${fallText ? 'scale-125' : 'scale-100'} w-[150px] sm:w-[150px] md:w-[180px] h-[150px] sm:h-[180px] md:h-[200px]`}
                    src={boxer_shiba}
                    alt="Boxer Shiba"
                  />
                  <h1 className={`font-bold text-2xl sm:text-3xl ${fallText ? 'fall' : ''}`}>vs</h1>
                  <img
                    className={`${fallText ? 'fall' : ''} w-[100px] sm:w-[120px] md:w-[150px] h-[100px] sm:h-[120px] md:h-[150px] transform -rotate-45`}
                    src={headphone_cat}
                    alt="Headphone Cat"
                  />
                </div>
                <div className="space-y-4">
                  <h1 className={`${fallText ? 'fall' : ''} text-center font-bold text-xl sm:text-2xl md:text-3xl`}>
                    World Showdown
                  </h1>
                  <p className={`${fallText ? 'fall' : ''} text-sm sm:text-base opacity-80`}>
                    Have a Showdown Contest by comparing with world highest
                    scores and know your World' scores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx="true">{`
        .fall {
          animation: fallDown 0.6s ease forwards;
        }

        @keyframes fallDown {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          60% {
            transform: translateY(60px) rotate(10deg);
            opacity: 0.6;
          }
          100% {
            transform: translateY(200px) rotate(30deg);
            opacity: 0;
            pointer-events: none;
          }
        }
      `}</style>
      </>
    );
};

export default WhatWeOffer;
