import styled from "styled-components";
import ToolBox from "../globalInfos/ToolBox";
import Sidebar from "./Sidebar";

const Dashboard = () => {
	return (
		<MainContainer>
			<Sidebar />
			<ToolBox />
		</MainContainer>
	);
};

const MainContainer = styled.div`
	display: flex;
`;

export default Dashboard;
