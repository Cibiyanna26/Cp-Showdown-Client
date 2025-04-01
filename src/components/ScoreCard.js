import CircularScore from "./CircularScore";

const ScoreCard = ({
    stats
}) =>{
    return (
      <>
        <div className="flex flex-col space-y-4 w-[280px] rounded-[16px]">
          <div className="h-[100px] flex flex-row justify-between">
            <h1>{stats?.userId}</h1>
            <CircularScore/>
          </div>

          {/* <p className="text-3xl font-bold text-center"># Rank {stats?.rank}</p>
          <div className=" bg-secondary  p-[16px] rounded-xl text-center flex justify-center space-y-6 flex-col min-h-[250px]">
            <SemiCircularProgressBar stats={stats} />
            <h1 className="text-xl font-semibold"> {stats?.userId}</h1>
          </div> */}
        </div>
      </>
    );
}

export default ScoreCard;