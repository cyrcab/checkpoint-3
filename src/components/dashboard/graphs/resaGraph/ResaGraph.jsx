import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const ResaGraph = ({ data }) => {
	return (
		<ResponsiveContainer width='80%' height='100%'>
			<LineChart width={300} height={300} >
				<Line type='monotone' dataKey='NbrResa' stroke='#8884d8' />
				<CartesianGrid stroke='#ccc' />
				<XAxis dataKey='name' />
				<YAxis />
				<Tooltip />
			</LineChart>
		</ResponsiveContainer>
	);
};

export default ResaGraph;
