import { useState } from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data for different time ranges
const dataWeek = [
  { day: "MON", Interviews: 10, Placements: 5 },
  { day: "TUE", Interviews: 15, Placements: 7 },
  { day: "WED", Interviews: 12, Placements: 8 },
  { day: "THU", Interviews: 20, Placements: 10 },
  { day: "FRI", Interviews: 25, Placements: 15 },
  { day: "SAT", Interviews: 18, Placements: 12 },
  { day: "SUN", Interviews: 5, Placements: 2 },
];

const dataMonth = [
  { week: "Week 1", Interviews: 60, Placements: 30 },
  { week: "Week 2", Interviews: 70, Placements: 40 },
  { week: "Week 3", Interviews: 80, Placements: 50 },
  { week: "Week 4", Interviews: 90, Placements: 60 },
];

const dataQuarter = [
  { month: "Jan", Interviews: 200, Placements: 120 },
  { month: "Feb", Interviews: 220, Placements: 130 },
  { month: "Mar", Interviews: 250, Placements: 140 },
];

const dataYear = [
  { quarter: "Q1", Interviews: 600, Placements: 400 },
  { quarter: "Q2", Interviews: 700, Placements: 450 },
  { quarter: "Q3", Interviews: 750, Placements: 470 },
  { quarter: "Q4", Interviews: 800, Placements: 500 },
];

const RevenueChart = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("This Week");

  let chartData = [];
  let dataKeyX = "";
  switch (selectedTimeRange) {
    case "This Week":
      chartData = dataWeek;
      dataKeyX = "day";
      break;
    case "This Month":
      chartData = dataMonth;
      dataKeyX = "week";
      break;
    case "This Quarter":
      chartData = dataQuarter;
      dataKeyX = "month";
      break;
    case "This Year":
      chartData = dataYear;
      dataKeyX = "quarter";
      break;
    default:
      chartData = dataWeek;
      dataKeyX = "day";
  }

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">
          Placements & Interviews ({selectedTimeRange})
        </h2>
        <select
          className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>This Quarter</option>
          <option>This Year</option>
        </select>
      </div>

      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey={dataKeyX} stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4B5563" }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="Interviews"
              stroke="#8B5CF6"
              fill="#8B5CF6"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="Placements"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default RevenueChart;
