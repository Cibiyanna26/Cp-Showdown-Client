import React, { useEffect, useState } from "react";
import { BarChart } from "./AppChart";

import { COLORS } from "../../contexts/variables";

export default function UserBarChart({ attr, comparable_matrix }) {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  function setNewBarState(usernames = [], attrData = []) {

    if (!COLORS || !Array.isArray(COLORS) || COLORS.length === 0) {
      console.error("COLORS array is missing or empty");
      return;
    }
    const newChartData = {
      labels: usernames,
      datasets: [
        {
          label: attr,
          data: attrData,
          backgroundColor: attrData.map(
            (_, i) =>
              COLORS[i % COLORS.length]?.background || "rgba(200, 200, 200, 0.2)"
          ),
          borderColor: attrData.map(
            (_, i) => COLORS[i % COLORS.length]?.border || "rgba(200, 200, 200, 1)"
          ),
          borderWidth: 1,
        },
      ],
    };
    setChartData(newChartData);
    // console.log("new chart data", newChartData)
  }


  useEffect(() => {
    if (!Array.isArray(comparable_matrix) || comparable_matrix.length === 0) {
      setChartData({ labels: [], datasets: [] });
      return;
    }

    let usernames = [];
    let attrData = [];

    comparable_matrix.forEach((element) => {
      if (element && element.username && element[attr] !== undefined) {
        usernames.push(element.username);
        attrData.push(element[attr]);
      }
    });

    setNewBarState(usernames, attrData);
  }, [comparable_matrix, attr]);

  return (
    <div className="md:w-[350px] w-[300px] bg-transparent">
      {chartData?.labels?.length > 0 ? (
      <BarChart chartData={chartData} />
    ) : (
      <div className="text-center p-4">No data available</div>
    )}
    </div>
  );
}
