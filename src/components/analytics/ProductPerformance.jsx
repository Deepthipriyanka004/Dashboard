import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

const productPerformanceData = [
	{ name: "Rice", day1: 4000, day2: 2400, day3: 2400,day4: 2400,day5: 2100 },
	{ name: "Dal", day1: 3000, day2: 1398, day3: 2210 ,day4: 240,day5: 2200},
	{ name: "Sambar", day1: 2000, day2: 9800, day3: 2290,day4: 2100,day5: 2400 },
	{ name: "Curd", day1: 2780, day2: 3908, day3: 2000 ,day4: 2000,day5: 2000},
	{ name: "Potato Curry", day1: 1890, day2: 4800, day3: 2181,day4: 2100,day5: 2100 },
	{ name: "Chapati", day1: 2390, day2: 3800, day3: 2500,day4: 2100,day5: 2100 },
	{name: "Pickle", day1: 3490, day2: 4300, day3: 2100 ,day4: 2100,day5: 2100},
	{name: "Papad", day1: 3490, day2: 4300, day3: 2100 ,day4: 2100,day5: 2100},
	{name: "Butter Milk", day1: 3490, day2: 4300, day3: 2100 ,day4: 2100,day5: 2100},
];

const ProductPerformance = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>Day Wise Data</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<BarChart data={productPerformanceData}>
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
						<Bar dataKey='day1' fill='#8B5CF6' />
						<Bar dataKey='day2' fill='#10B981' />
						<Bar dataKey='day3' fill='#F59E0B' />
						<Bar dataKey='Week4' fill='#3B82F6' />
						<Bar dataKey='Week5' fill='#EF4444' />

					</BarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default ProductPerformance;
