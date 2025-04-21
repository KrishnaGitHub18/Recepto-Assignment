import React from "react";
import { LineChart } from '@mui/x-charts';

export default function Graph({height, width, color}: {height: number, width: number, color: string}) {
  return (
    <LineChart
      xAxis={[
        {
          scaleType: "point",
          data: ["Jan", "Feb", "Mar", "Apr", "May"],
          label: "Month",
        },
      ]}
      series={[
        {
          data: [200, 260, 310, 370, 394],
          area: true,
          color: color,
        },
      ]}
      height={height}
      width={width}
    />
  );
}
