import React, { useState, useEffect } from "react";
import { Radar } from "react-chartjs-2";
import { COLORS } from "../contexts/variables";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);


const RadarChart = ({ usersData, focusedUser }) => {
  const [activeDataset, setActiveDataset] = useState(0);

  // Map user data to dataset (using up to 5 predefined colors)
  const datasets = usersData.slice(0, 5).map((value, index) => {
 
   const color = COLORS[index];
    return {
      label: `${value?.userId}`,
      data: [
        value?.easy100,
        value?.medium100,
        value?.hard100,
        value?.easyAC,
        value?.mediumAC,
        value?.hardAC,
        value?.rating100,
      ],
      backgroundColor: activeDataset === index ? color?.activeBackground : color?.background, 
      borderColor: color.border,
      borderWidth: activeDataset === index ? 3 : 2, // Highlight active user
      pointBackgroundColor: color.point,
      isActive: activeDataset === index, // Add a flag to identify the active dataset
    };
  });

  // Ensure the active dataset is the first element
  datasets.sort((a, b) => b.isActive - a.isActive);

  const data = {
    labels: [
      "Easy",
      "Medium",
      "Hard",
      "Easy AC",
      "Medium AC",
      "Hard AC",
      "Rating (Scaled)",
    ],
    datasets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        min: 0, // Set the minimum value for the axis
        max: 100, // Set the maximum value (adjust based on your data)
        angleLines: { color: "rgba(255, 255, 255, 0.3)" },
        grid: { color: "rgba(255, 255, 255, 0.3)" },
        pointLabels: { color: "#E0E0E0", font: { size: 14 } },
        ticks: { color: "#B0C4DE", backdropColor: "rgba(0, 0, 0, 0)" },
      },
    },
    plugins: {
      legend: {
        labels: { color: "#F8F8FF" }, // Light color for dark mode
      },
    },
    onHover: (event, elements) => {
      if (elements.length > 0) setActiveDataset(elements[0].datasetIndex);
    },
    onLeave: () => setActiveDataset(null),
  };

  // // Remove background color for radar chart datasets
  // datasets.forEach(dataset => {
  //   dataset.backgroundColor = "rgba(0, 0, 0, 0)";
  // });

  useEffect(() =>{
    setActiveDataset(focusedUser)
  }, [focusedUser])

  return (
    <div className="w-full max-w-[600px] max-h-[400px] aspect-square p-5 rounded-lg mx-auto">
      <Radar data={data} options={options} />
      <div className="w-full flex justify-center">
        <span>|</span>
        {
          usersData.map((element,index)=>{
            const color = activeDataset === index ? COLORS[index]?.activeBackground : COLORS[index]?.background
            return(
              <span className={`text-[${color}] pl-[4px]`}>
                {element.score} | 
              </span>
            )
          })
        }
      </div>
    </div>
  );
};

export default RadarChart;
