// import * as React from "react";
// import {
//   VictoryChart,
//   VictoryAxis,
//   VictoryLine,
//   VictoryScatter,
// } from "victory";

// const LineChart = (props) => {
//   return (
//     <>
//         <VictoryChart height={200}>
//           <VictoryAxis
//             dependentAxis
//             tickValues={[0, 2, 4, 6, 8]}
//             style={{
//               axis: { stroke: "none" },
//               axisLabel: { fontSize: 20, padding: 30, fill:"#FFF" },
//               grid: { stroke: "white" },
//               tickLabels: { fontSize: 15, padding: 5, color:"#FFF" },
//             }}
//           />
//           <VictoryAxis tickValues={[2, 4, 6]} />
//           <VictoryLine
//             style={{
//               data: { stroke: "#FFF", strokeWidth: 3 },
//             }}
//             data={[
//               { x: 1, y: 2 },
//               { x: 2, y: 3 },
//               { x: 3, y: 5 },
//               { x: 4, y: 4 },
//               { x: 5, y: 7 },
//             ]}
//           />
//           <VictoryScatter
//             data={[
//               { x: 1, y: 2 },
//               { x: 2, y: 3 },
//               { x: 3, y: 5 },
//               { x: 4, y: 4 },
//               { x: 5, y: 7 },
//             ]}
//             samples={40}
//             size={8}
//             style={{ data: { fill: "#FFF" } }}
//           />
//         </VictoryChart>
//     </>
//   );
// };

// export default LineChart;
