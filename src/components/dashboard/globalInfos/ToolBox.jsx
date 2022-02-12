import styled from "styled-components";
import GraphContainer from "../resaGraph/GraphContainer";

const ToolBox = () => {
	return (
		<Container>
			<h2>ToolBox</h2>
			<GraphContainer />
		</Container>
	);
};

const Container = styled.div`
	width: 80%;
	padding: 2em;
	background-color: var(--main-color);
`;

export default ToolBox;
