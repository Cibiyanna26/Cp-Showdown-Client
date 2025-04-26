import React from 'react';
import mid_background from '@assets/png/mid-page-bg.png';
import vs from '@assets/svg/vs.svg';
import demo_score_1 from '@assets/svg/demo-score-1.svg';
import demo_score_2 from '@assets/svg/demo-score-2.svg';

const About: React.FC = () => {
  return (
    <>
      <div
        className="flex min-h-screen px-4 sm:px-8 md:px-16"
        style={{
          backgroundImage: `url(${mid_background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col space-y-6 mt-16 md:mt-24 lg:mt-32 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary text-center">
            ABOUT
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-tertiary text-center px-4 sm:px-8 md:px-16">
            CP SHOWDOWN is a platform that lets you compare your{" "}
            <span className="text-tertiary">CP profile</span> with your coding
            companion and evaluate your global ranking.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            {/* Winner Section */}
            <div className="flex flex-col space-y-4 text-[#F1BC19] w-full max-w-xs md:max-w-sm">
              <div className="bg-transparent border-2 border-[#F1BC19] p-4 rounded-xl text-center">
                Winner👑
              </div>
              <div className="bg-transparent border-2 border-[#F1BC19] p-4 rounded-xl text-center flex flex-col items-center space-y-4">
                <img
                  className="w-32 h-32 md:w-40 md:h-40"
                  src={demo_score_1}
                  alt="Winner"
                />
                <h1 className="text-lg md:text-xl font-semibold">
                  Will Smith
                </h1>
              </div>
            </div>
            {/* VS Icon */}
            <img src={vs} className="w-10 h-10 md:w-16 md:h-16" alt="VS" />
            {/* Runner Section */}
            <div className="flex flex-col space-y-4 text-[#B0BEC5] w-full max-w-xs md:max-w-sm">
              <div className="bg-transparent border-2 border-[#B0BEC5] p-4 rounded-xl text-center">
                Runner🏃
              </div>
              <div className="bg-transparent border-2 border-[#B0BEC5] p-4 rounded-xl text-center flex flex-col items-center space-y-4">
                <img
                  className="w-32 h-32 md:w-40 md:h-40"
                  src={demo_score_2}
                  alt="Runner"
                />
                <h1 className="text-lg md:text-xl font-semibold">Jedan Smith</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;