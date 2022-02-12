import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const ResaGraph = () => {
	const data = [
		{
			name: "Mon",
			NbrResa: 60,
		},
		{
			name: "Tue",
			NbrResa: 30,
		},
		{
			name: "Wed",
			NbrResa: 33,
		},
		{
			name: "Thu",
			NbrResa: 45,
		},
		{
			name: "Fri",
			NbrResa: 56,
		},
		{
			name: "Sat",
			NbrResa: 33,
		},
		{
			name: "Sun",
			NbrResa: 34,
		},
	];

	return (
		<>
			<LineChart width={500} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
				<Line type='monotone' dataKey='NbrResa' stroke='#8884d8' />
				<CartesianGrid stroke='#ccc' />
				<XAxis dataKey='name' />
				<YAxis />
        <Tooltip />
			</LineChart>
		</>
	);
};

export default ResaGraph;
