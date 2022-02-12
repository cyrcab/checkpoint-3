import styled from "styled-components";
import ResaGraph from "../resaGraph/ResaGraph";

const ToolBox = () => {
	return (
		<Container>
			<h2>ToolBox</h2>
			<ResaGraph />
		</Container>
	);
};

const Container = styled.div`
	width: 80%;
	padding: 2em;
	background-color: var(--main-color);
`;

export default ToolBox;
