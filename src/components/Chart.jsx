import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

function App() {
  return (
    <ResponsiveContainer width="90%" height={400}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="gradient" x1="1" y2="1">
            <stop offset="10%" stopColor="#08009e" stopOpacity={1} />
            <stop offset="100%" stopColor="#08009e" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <Area dataKey="score" type="monotone" fill="url(#gradient)" />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default App;
