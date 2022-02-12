import styled from "styled-components";

const ButtonSwitchMode = ({ left, center, right }) => {
	return (
		<ButtonContainer>
			<ButtonLeft>{left}</ButtonLeft>
			<ButtonCenter>{center}</ButtonCenter>
			<ButtonRight>{right}</ButtonRight>
		</ButtonContainer>
	);
};

const ButtonContainer = styled.div``;

const ButtonLeft = styled.button`
	padding: 0.5em 0.5em 0.5em 1em;
	border-radius: 40px 0px 0px 40px;
	border: none;
	color: grey;
	font-size: 1em;
	:hover {
		background-color: whitesmoke;
		cursor: pointer;
	}
`;
const ButtonCenter = styled.button`
	padding: 0.5em;
	border: none;
	color: grey;
	font-size: 1em;
	border-left: 2px solid white;
	border-right: 2px solid white;
	:hover {
		background-color: whitesmoke;
		cursor: pointer;
	}
`;
const ButtonRight = styled.button`
	padding: 0.5em 1em 0.5em 0.5em;
	border-radius: 0px 40px 40px 0px;
	border: none;
	color: grey;
	font-size: 1em;
	:hover {
		background-color: whitesmoke;
		cursor: pointer;
	}
`;

export default ButtonSwitchMode;
