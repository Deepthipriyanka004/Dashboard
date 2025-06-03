import { motion } from "framer-motion";
import {  Users, Trash2,Utensils,BarChart } from "lucide-react";

const INSIGHTS = [
	{
		icon: Trash2,
		color: "text-red-500",
		insight: "Daily food wastage in the hostel has decreased by 10% after implementing portion control measures.",
	},
	{
		icon: Users,
		color: "text-blue-500",
		insight: "Student participation in the food donation program has increased by 15% this week, reducing overall wastage.",
	},
	{
		icon: Utensils,
		color: "text-purple-500",
		insight: 'Leftover food from the mess is now being repurposed into meal boxes for distribution, cutting waste by 20% weekly.',
	},
	{
		icon: BarChart,
		color: "text-green-500",
		insight: "Analyzing food consumption patterns can help further reduce wastage by adjusting menu planning and portion sizes.",
	},
	
];

const AIPoweredInsights = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 1.0 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>AI-Powered Insights</h2>
			<div className='space-y-4'>
				{INSIGHTS.map((item, index) => (
					<div key={index} className='flex items-center space-x-3'>
						<div className={`p-2 rounded-full ${item.color} bg-opacity-20`}>
							<item.icon className={`size-6 ${item.color}`} />
						</div>
						<p className='text-gray-300'>{item.insight}</p>
					</div>
				))}
			</div>
		</motion.div>
	);
};
export default AIPoweredInsights;
