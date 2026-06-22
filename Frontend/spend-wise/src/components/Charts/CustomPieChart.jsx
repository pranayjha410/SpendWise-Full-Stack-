import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
const CustomPieChart = ({data}) => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={3}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomPieChart
