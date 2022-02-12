import LinkContainer from "./LinkContainer";
import Icone from "./Icone";
import styled from "styled-components";
import FooterNavBar from "./FooterNavBar";

const Sidebar = () => {
	return (
		<NavBar>
			<Icone />
			<LinkContainer />
			<FooterNavBar />
		</NavBar>
	);
};

const NavBar = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 20%;
	background-color: #2e2f2f;
	min-height: 100vh;
	box-shadow: 8px 0px 22px 0px rgba(0,0,0,0.85);
`;

export default Sidebar;
