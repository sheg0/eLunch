import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
const Statistics = () => {
  // Sample data for the charts
  const [barChartData, setBarChartData] = useState({
    labels: ["Is Creator", "Is Cook", "Is Organisator", "Is Buyer", "Is Idle"],
    datasets: [
      {
        label: "Data Set 1",
        data: [25, 42, 18, 30, 50],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  });

  const [lineChartData, setLineChartData] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Data Set 1",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div>
      <h2>Activity</h2>
      <Bar
        data={barChartData}
        options={{
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />

      <h2>Activity</h2>
      <Line
        data={lineChartData}
        options={{
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default Statistics;
