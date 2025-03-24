import mid_background from '../../assets/mid-page-bg.png';
import vs from '../../assets/vs.svg'
import demo_score_1 from '../../assets/demo-score-1.svg'
import demo_score_2 from '../../assets/demo-score-2.svg'
const About = () =>{
    return (
      <>
        <div
          className="flex min-h-screen px-[128px]"
          style={{
            backgroundImage: `url(${mid_background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col space-y-6 mt-[120px]">
            <h1 className="text-[48px] font-extrabold text-secondary">ABOUT</h1>
            <p className="text-xl font-bold text-tertiary">
              CP SHOWDOWN is a platform that lets you compare your{" "}
              <span className="text-tertiary">CP profile</span> with your coding
              companion and evaluate your global ranking.
            </p>
            <div className="flex flex-row justify-center space-x-8">
              <div className="flex flex-col space-y-4 text-[#F1BC19] min-w-[300px] min-h-[300px]">
                <div className="bg-transparent border-2 border-[#F1BC19] p-[16px] rounded-xl">
                  {" "}
                  Winner👑
                </div>
                <div className="bg-transparent border-2 border-[#F1BC19] p-[16px] rounded-xl text-center flex justify-center space-y-6 flex-col min-h-[250px]">
                  <img className="" src={demo_score_1}></img>
                  <h1 className="text-xl font-semibold"> Arulcibi007</h1>
                </div>
              </div>
              {/* The end of one score */}
              {/* <div className=''> */}
              <img src={vs}></img>
              {/* </div> */}
              <div className="flex flex-col space-y-4 text-[#B0BEC5] min-w-[300px] min-h-[300px]">
                <div className="bg-transparent border-2 border-[#B0BEC5] p-[16px] rounded-xl">
                  {" "}
                  Runner🏃
                </div>
                <div className="bg-transparent border-2 border-[#B0BEC5] p-[16px] rounded-xl text-center flex justify-center space-y-6 flex-col min-h-[250px]">
                  <img className="" src={demo_score_2}></img>
                  <h1 className="text-xl font-semibold"> Will Smith</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default About;