import SemiCircularProgressBar from "./SemiCircularProgress";

const ScoreCard = ({
    stats, rank
}) =>{
    return (
      <>
        <div className="flex flex-col space-y-4 min-w-[300px] min-h-[300px]">
          <p className="text-3xl font-bold text-center"># Rank {rank}</p>
          <div className=" bg-secondary  p-[16px] rounded-xl text-center flex justify-center space-y-6 flex-col min-h-[250px]">
            <SemiCircularProgressBar stats={stats}/>
            <h1 className="text-xl font-semibold"> {stats?.userId}</h1>
          </div>
        </div>
      </>
    );
}

export default ScoreCard;