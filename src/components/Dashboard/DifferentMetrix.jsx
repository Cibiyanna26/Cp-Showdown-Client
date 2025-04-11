import UserBarChart from "../ui/UserBarChart";
import mid_background from '../../assets/mid-page-bg.png'
import style from './DifferentMetrix.module.css';

const DifferentMatrix = ({ comparable_matrix }) => {
  console.log("comparable_matrix", comparable_matrix);
  const fields = [
    "ranking",
    "reputation",
    "activeYears",
    "streak",
    "totalActiveDays"
  ]
  return (
    <>
      <div
        className="flex lg:min-h-screen px-4 py-6"
        style={{
          backgroundImage: `url(${mid_background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col space-y-4 w-full max-w-[900px] mx-auto md:mt-[40px] mt-[20px]">
          <div className="flex flex-row justify-center items-center gap-[8px]">
            <h1 className="text-center md:text-3xl text-2xl font-bold">Wanna Know More?</h1>
            <img src="https://i.imgur.com/b9NyUGm.png" className="w-[60px] h-[60px]"></img>
          </div>
          <div className="flex flex-row flex-wrap justify-around gap-x-4 gap-y-8">
            {fields &&
              fields.map((value, index) => {
                return (
                  <>
                    <div className={`${style.barChartCard}`} key={index}>
                      <h1 className="capitalize">{value}</h1>
                      <UserBarChart
                        attr={value}
                        comparable_matrix={comparable_matrix}
                      />
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DifferentMatrix;