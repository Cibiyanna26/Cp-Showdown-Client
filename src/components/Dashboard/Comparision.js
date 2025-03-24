import mid_background from "../../assets/mid-page-bg.png";
import vs from "../../assets/vs.svg";
import demo_score_1 from "../../assets/demo-score-1.svg";
import demo_score_2 from "../../assets/demo-score-2.svg";
import SemiCircularProgress from "../SemiCircularProgress";
import right_arrow from '../../assets/right-arrow.svg'
import left_arrow from '../../assets/left-arrow.svg'
import look_down_arrow from '../../assets/look-down.svg'

const Comparision = () => {

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
          <div className="flex flex-row justify-center space-x-8">
            {/* cards of result */}
            <div className="flex flex-col space-y-4 min-w-[300px] min-h-[300px]">
              <p className="text-3xl font-bold text-center"># Rank 1</p>
              <div className=" bg-secondary  p-[16px] rounded-xl text-center flex justify-center space-y-6 flex-col min-h-[250px]">
                <SemiCircularProgress />
                <h1 className="text-xl font-semibold"> Arulcibi007</h1>
              </div>
            </div>
            {/* The end of one score */}
            {/* <div className=''> */}
            <img src={vs}></img>
            {/* </div> */}
            <div className="flex flex-col space-y-4 min-w-[300px] min-h-[300px]">
              <p className="text-3xl font-bold text-center"># Rank 2</p>
              <div className=" bg-secondary  p-[16px] rounded-xl text-center flex justify-center space-y-6 flex-col min-h-[250px]">
                <SemiCircularProgress />
                <h1 className="text-xl font-semibold"> Arulcibi007</h1>
              </div>
            </div>
          </div>
          {/* navigation to see all user scores */}
          <div className="flex justify-between">
            <div className="flex flex-row space-x-4 items-center">
              <img src={left_arrow}></img>
              <p className="text-xl font-bold">Prev</p>{" "}
            </div>
            <div className="text-xl font-bold">1 vs 2</div>
            <div className="flex flex-row space-x-4 items-center">
              <p className="text-xl font-bold">Next</p>{" "}
              <img src={right_arrow}></img>
            </div>
          </div>
          {/* hint for user to see down for analysis */}
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
