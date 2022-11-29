import { Center, Container } from "@mantine/core";
import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
interface props {
  index: number | any;
  data: number | any;
}

export const Graph2 = (pdata: props | any) => {
  const gdata = pdata.data.filter(function (element: any) {
    return element !== undefined;
  });
  console.log(gdata);
  return (
    <>
      <ResponsiveContainer width="95%" height={200}>
        <LineChart data={gdata}>
          <Line
            type="monotone"
            dataKey="data"
            stroke="#03fcf8"
            strokeWidth={3}
            fill="#545454"
          />
          {/* strokeDasharray="3 3" */}
          <CartesianGrid stroke="#545454" />
          <Tooltip />
          {/* <Legend color="black" /> */}
          <XAxis dataKey="index" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
