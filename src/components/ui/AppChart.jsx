import React from "react";
import { Bar } from "react-chartjs-2";

import { Chart } from "chart.js";
import {
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
} from "chart.js";


Chart.register(CategoryScale, LinearScale, BarController, BarElement);

export const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <Bar
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: "#FFFFFF", // White color for y-axis labels
              },
            },
            x: {
              ticks: {
                color: "#FFFFFF", // White color for x-axis labels
              },
            },
          },
          plugins: {
            legend: {
              labels: { color: "#FFFFFF" }, // White color for legend labels
            },
          },
        }}
      />
    </div>
  );
};
