import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

// Data: number of candidates remaining after each round
const interviewDropOffData = [
  { round: "Round 1", candidates: 100 },
  { round: "Round 2", candidates: 75 },
  { round: "Round 3", candidates: 50 },
  { round: "Round 4", candidates: 30 },
  { round: "Round 5", candidates: 15 },
];

const InterviewDropOffLineChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        Interview Drop-off Rates
      </h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={interviewDropOffData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="round" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="candidates"
              stroke="#8B5CF6"
              strokeWidth={2}
              activeDot={{ r: 6 }}
              name="Candidates Remaining"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default InterviewDropOffLineChart;
