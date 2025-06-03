import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const categoryData = [
	{ name: "CSE", value: 40 },
	{ name: "AIML", value: 40 },
	{ name: "MCA", value: 40 },
	{ name: "ECE", value: 32 },
	{ name: "MECH", value: 28 },
	{ name: "CIVIL", value: 15 },
	{ name: "EEE", value: 5 },
];

// Added two more colors for the last two branches
const COLORS = [
	"#6366F1", // CSE - Indigo-500
	"#8B5CF6", // AIML - Violet-500
	"#EC4899", // MCA - Pink-500
	"#10B981", // ECE - Emerald-500
	"#F59E0B", // MECH - Amber-500
	"#3B82F6", // CIVIL - Blue-500
	"#EF4444", // EEE - Red-500
];

const CategoryDistributionChart = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Department-wise Placement Distribution</h2>
			<div className='h-80'>
				<ResponsiveContainer width={"100%"} height={"100%"}>
					<PieChart>
						<Pie
							data={categoryData}
							cx={"50%"}
							cy={"50%"}
							labelLine={false}
							outerRadius={80}
							fill='#8884d8'
							dataKey='value'
							label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
						>
							{categoryData.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default CategoryDistributionChart;
