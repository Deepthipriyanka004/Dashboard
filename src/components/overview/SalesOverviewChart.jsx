import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

// Dummy monthly placement data
const placementData = [
  { name: "Jul", Placements: 30 },
  { name: "Aug", Placements: 22 },
  { name: "Sep", Placements: 45 },
  { name: "Oct", Placements: 40 },
  { name: "Nov", Placements: 55 },
  { name: "Dec", Placements: 70 },
  { name: "Jan", Placements: 50 },
  { name: "Feb", Placements: 48 },
  { name: "Mar", Placements: 60 },
  { name: "Apr", Placements: 57 },
  { name: "May", Placements: 65 },
  { name: "Jun", Placements: 75 },
];

const MonthlyPlacementOverviewChart = () => {
  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className='text-lg font-medium mb-4 text-gray-100'>
        Monthly Placement Overview
      </h2>

      <div className='h-80'>
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={placementData}>
            <CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
            <XAxis dataKey={"name"} stroke='#9ca3af' />
            <YAxis stroke='#9ca3af' />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type='monotone'
              dataKey='Placements'
              stroke='#6366F1' // teal green
              strokeWidth={3}
              dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default MonthlyPlacementOverviewChart;
