import styled from "styled-components";

const Icone = (/*{Img}*/) => {
	return (
		<ImgContainer>
			<ImgProfile alt="icon profile"/>
		</ImgContainer>
	);
};

const ImgContainer = styled.div`
  padding-top: 2em;
`;

const ImgProfile = styled.div`
	width: 120px;
	height: 120px;
  background-color: red;
`;
export default Icone;
