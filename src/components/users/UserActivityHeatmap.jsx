import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

const userActivityData = [
	{ name: "Mon", CSE: 20, AIML: 40, MCA: 60, ECE: 50, MECH: 30, CIVIL: 15, EEE: 5 },
	{ name: "Tue", CSE: 30, AIML: 50, MCA: 70, ECE: 60, MECH: 40, CIVIL: 20, EEE: 10 },
	{ name: "Wed", CSE: 40, AIML: 60, MCA: 80, ECE: 70, MECH: 50, CIVIL: 25, EEE: 15 },
	{ name: "Thu", CSE: 50, AIML: 70, MCA: 90, ECE: 80, MECH: 60, CIVIL: 30, EEE: 20 },
	{ name: "Fri", CSE: 60, AIML: 80, MCA: 100, ECE: 90, MECH: 70, CIVIL: 35, EEE: 25 },
	{ name: "Sat", CSE: 70, AIML: 90, MCA: 110, ECE: 100, MECH: 80, CIVIL: 40, EEE: 30 },
	{ name: "Sun", CSE: 80, AIML: 100, MCA: 120, ECE: 110, MECH: 90, CIVIL: 45, EEE: 35 },
];

const COLORS = {
  CSE: "#6366F1",
  AIML: "#8B5CF6",
  MCA: "#EC4899",
  ECE: "#10B981",
  MECH: "#F59E0B",
  CIVIL: "#3B82F6",
  EEE: "#EF4444",
};

const UserActivityHeatmap = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>Company-wise Selections per Day</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<BarChart data={userActivityData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='name' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						{/* Bars with the same color scheme */}
						{Object.entries(COLORS).map(([key, color]) => (
							<Bar key={key} dataKey={key} stackId='a' fill={color} />
						))}
					</BarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default UserActivityHeatmap;
