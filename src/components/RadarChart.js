import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import mid_background from "../assets/mid-page-bg.png";
// const data = [
//   { subject: "GENERAL INFO", A: 90, B: 80, C: 85, fullMark: 100 },
//   { subject: "PERFORMANCE", A: 70, B: 60, C: 65, fullMark: 100 },
//   { subject: "BENCHMARKS", A: 50, B: 40, C: 45, fullMark: 100 },
//   { subject: "MEMORY", A: 30, B: 50, C: 40, fullMark: 100 },
//   { subject: "FEATURES", A: 80, B: 90, C: 85, fullMark: 100 },
// ];

const RadarChartComponent = () => {
  const data = [
    { subject: "EASY", A: 90, B: 80, C: 85, fullMark: 100 },
    { subject: "MEDIUM", A: 70, B: 60, C: 65, fullMark: 100 },
    { subject: "HARD", A: 50, B: 40, C: 45, fullMark: 100 },
    { subject: "EASY_AC", A: 30, B: 50, C: 40, fullMark: 100 },
    { subject: "MEDIUM_AC", A: 80, B: 90, C: 85, fullMark: 100 },
    { subject: "HARD_AC", A: 50, B: 40, C: 45, fullMark: 100 },
    { subject: "RATING", A: 30, B: 50, C: 40, fullMark: 100 },
  ];

  return (
    <ResponsiveContainer
      width="100%"
      height={300}
      // style={{
      //   backgroundImage: `url(${mid_background})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar
          name="Option A"
          dataKey="A"
          stroke="#FF0000"
          fill="#FF0000"
          fillOpacity={0.6}
        />
        <Radar
          name="Option B"
          dataKey="B"
          stroke="#0000FF"
          fill="#0000FF"
          fillOpacity={0.6}
        />
        <Radar
          name="Option C"
          dataKey="C"
          stroke="#00FF00"
          fill="#00FF00"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartComponent;
