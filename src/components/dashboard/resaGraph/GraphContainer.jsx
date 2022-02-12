import styled from "styled-components";
import ResaGraph from "./ResaGraph";
import ButtonSwitchMode from "./ButtonSwitchMode";

const GraphContainer = () => {
	return (
		<MainContainer>
			<ResaGraph />
			<ButtonSwitchMode left='Week' center='Month' right='Year' />
		</MainContainer>
	);
};

const MainContainer = styled.div`
	width: 40%;
	height: 30vh;
	display: flex;
	flex-direction: column;
	padding: 2em 1em;
	align-items: center;
	background: white;
	border-radius: 15px;
	opacity: 0.9;
	box-shadow: 0px 0px 50px -15px rgba(137, 137, 137, 0.81);
`;

export default GraphContainer;
