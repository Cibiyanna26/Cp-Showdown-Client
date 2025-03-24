import React, { useState, useEffect } from "react";
import { Radar } from "react-chartjs-2";
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

// Predefined colors for exactly 5 users
const COLORS = [
  { 
    border: "#FFD700", 
    background: "rgba(255, 215, 0, 0.3)", 
    point: "#FFD700", 
    activeBackground: "rgba(255, 215, 0, 0.6)" 
  }, // Gold
  { 
    border: "#00FFFF", 
    background: "rgba(0, 255, 255, 0.3)", 
    point: "#00FFFF", 
    activeBackground: "rgba(0, 255, 255, 0.6)" 
  }, // Cyan
  { 
    border: "#DC143C", 
    background: "rgba(220, 20, 60, 0.3)", 
    point: "#DC143C", 
    activeBackground: "rgba(220, 20, 60, 0.6)" 
  }, // Crimson
  { 
    border: "#32CD32", 
    background: "rgba(50, 205, 50, 0.3)", 
    point: "#32CD32", 
    activeBackground: "rgba(50, 205, 50, 0.6)" 
  }, // Lime Green
  { 
    border: "#FF8C00", 
    background: "rgba(255, 140, 0, 0.3)", 
    point: "#FF8C00", 
    activeBackground: "rgba(255, 140, 0, 0.6)" 
  }, // Dark Orange
];

const RadarChart = ({ usersData, focusedUser }) => {
  const [activeDataset, setActiveDataset] = useState(0);

  // Map user data to dataset (using up to 5 predefined colors)
  const datasets = usersData.slice(0, 5).map((value, index) => {
    const color = COLORS[index];

    return {
      label: `User ${value?.userId}`,
      data: [
        value?.easy,
        value?.medium,
        value?.hard,
        value?.easyAC,
        value?.mediumAC,
        value?.hardAC,
        value?.rating / 10,
      ],
      backgroundColor: activeDataset === index ? color.activeBackground : color.background, 
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

  useEffect(() =>{
    setActiveDataset(focusedUser)
  }, [focusedUser])

  return (
    <div
      style={{
        width: "450px",
        height: "450px",
        backgroundColor: "#4B0082",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
