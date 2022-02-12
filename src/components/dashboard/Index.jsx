import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./navigation/Sidebar";

const Dashboard = () => {
	return (
		<MainContainer>
			<Sidebar />
			<Outlet />
		</MainContainer>
	);
};

const MainContainer = styled.div`
	display: flex;
`;

export default Dashboard;
