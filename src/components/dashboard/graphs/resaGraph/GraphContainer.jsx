import styled from "styled-components";
import ResaGraph from "./ResaGraph";
import ButtonSwitchMode from "../../../buttons/ButtonThreeMode";
import ToolContainer from "../../style/ToolContainer";

const GraphContainer = () => {
	return (
		<ToolContainer>
			<ResaGraph />
			<ButtonSwitchMode left='Week' center='Month' right='Year' />
		</ToolContainer>
	);
};

export default GraphContainer;
