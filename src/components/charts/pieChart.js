import React from "react";
import { ResponsivePie } from "@nivo/pie";

const margin = { top: 30, right: 110, bottom: 30, left: 110 };

const styles = {
  root: {
    fontFamily: "Ubuntu, sans-serif",
    textAlign: "center",
    position: "relative",
    width: "100%",
    height: 300,
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: margin.right,
    bottom: 0,
    left: margin.left,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "4em",
    color: "#FFFFFF",
    textAlign: "center",
    pointerEvents: "none",
  },
  totalLabel: {
    fontSize: ".2em",
  },
  tooltip: {
    color: "#000"
  }
};

const data = [
  {
    id: "Marketing",
    label: "Marketing",
    value: 70,
  },
  {
    id: "Facilities",
    label: "Facilities",
    value: 35,
  },
  {
    id: "Engineering",
    label: "Engineering",
    value: 33,
  },
  {
    id: "HR",
    label: "HR",
    value: 27,
  },
];

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

const legends = [
  {
    anchor: "right",
    direction: "column",
    justify: false,
    translateX: 140,
    translateY: 0,
    itemsSpacing: 2,
    itemWidth: 100,
    itemHeight: 20,
    itemDirection: "left-to-right",
    itemOpacity: 0.85,
    itemTextColor: "#888",
    symbolSize: 20,
    fontSize: "1.2em",
    effects: [
      {
        on: "hover",
        style: {
          itemOpacity: 1,
        },
      },
    ],
  },
];

const PieChart = () => (
  <div style={styles.root}>
    <ResponsivePie
      arcLinkLabelsTextColor="#fff"
      arcLinkLabelsTextSize="2em"
      margin={margin}
      data={data}
      innerRadius={0.7}
      enableRadialLabels={false}
      enableSlicesLabels={false}
      theme={theme}

    />
    <div style={styles.overlay}>
      <span>5</span>
      <span style={styles.totalLabel}>Departments</span>
    </div>
  </div>
);

export default PieChart;
