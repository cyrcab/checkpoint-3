import styled from "styled-components";
import ToolBox from "./ToolBox";

const Dashboard = () => {
	return (
		<MainContainer >
			<ToolBox />
		</MainContainer>
	);
};

const MainContainer = styled.div`
	display: flex;
`;

export default Dashboard;
