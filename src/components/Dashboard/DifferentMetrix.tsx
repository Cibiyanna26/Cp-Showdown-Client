import React from "react";
import UserBarChart from "@components/ui/UserBarChart";
import mid_background from '@assets/png/mid-page-bg.png';
import style from '@components/Dashboard/DifferentMetrix.module.css';
import MultipleBarChart from '@components/Multiple-bar-chart'
import { ComparableMatrix } from "@/lib/types";

interface DifferentMatrixProps {
  comparable_matrix: ComparableMatrix[]; // Adjust the type based on the actual structure of `comparable_matrix`
}

const DifferentMatrix: React.FC<DifferentMatrixProps> = ({ comparable_matrix }) => {
  console.log("comparable_matrix", comparable_matrix);

  const fields: string[] = [
    "ranking",
    "reputation",
    "activeYears",
    "streak",
    "totalActiveDays"
  ];

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
            <h1 className="text-center md:text-3xl text-2xl font-bold">
              Wanna Know More?
            </h1>
            <img
              src="https://i.imgur.com/b9NyUGm.png"
              className="w-[60px] h-[60px]"
              alt="Icon"
            />
          </div>
          <div className="flex flex-row flex-wrap justify-around gap-x-4 gap-y-8">
            {fields.map((value, index) => (
              <div className={`${style.barChartCard}`} key={index}>
                <h1 className="capitalize font-bold text-md">{value}</h1>
                <UserBarChart
                  attr={value}
                  comparable_matrix={comparable_matrix}
                />
              </div>
            ))}
          </div>
          {/* <div className="flex flex-row flex-wrap justify-around gap-x-4 gap-y-8">
            {fields.map((value, index) => (
              <MultipleBarChart
                attr={value as keyof ComparableMatrix}
                comparable_matrix={comparable_matrix}
              />
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default DifferentMatrix;