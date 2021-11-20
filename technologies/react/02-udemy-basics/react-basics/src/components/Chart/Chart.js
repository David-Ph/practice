import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

function Chart(props) {
    const dataPointValues = props.dataPoints.map((dataPoint) => {
        return dataPoint.value;
    });
    const totalMaximum = Math.max(...dataPointValues)

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar maxValue={totalMaximum} value={dataPoint.value} label={dataPoint.label} key={dataPoint.label}/>
      ))}
    </div>
  );
}

export default Chart;
