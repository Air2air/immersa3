import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const styles = {
  root: {
    fontFamily: "Ubuntu, sans-serif",
    textAlign: "center",
    position: "relative",
    width: "100%",
    height: 280,
  },
};

const theme = {
  fontSize: ".9em",
  axis: {
    tickColor: "#eee",
    ticks: {
      line: {
        stroke: "#fff",
      },
      text: {
        fill: "#fff",
      },
    },
    legend: {
      text: {
        fill: "#aaaaaa",
      },
    },
  },
  grid: {
    line: {
      stroke: "#fff",
    },
  },
};

const commonProperties = {
    margin: { top: 40, right: 40, bottom: 40, left: 60 },
    padding: 0.3,
    labelTextColor: "#fff",
    labelSkipWidth: 16,
    labelSkipHeight: 16
  };

const data = [
  { department: "Marketing", issues: 130 },
  { department: "HR", issues: 165 },
  { department: "Engineering", issues: 142 },
  { department: "Facilities", issues: 190 },
];

const BarChart = () => (
  <div style={styles.root}>
    <ResponsiveBar
     {...commonProperties} 
      data={data}
      theme={theme}
      colors={{ scheme: "category10" }} 
      keys={["issues"]}
      indexBy="department"
    />
  </div>
);

export default BarChart;
