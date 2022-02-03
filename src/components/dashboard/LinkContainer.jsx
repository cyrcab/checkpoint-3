import styled from "styled-components";
import { MdOutlineDashboard, MdOutlinePeopleAlt, ImProfile } from "react-icons/all";

const LinkContainer = () => {
	return (
		<Container>
			<ListContainer>
				<ElemList>
					<IconContainer>
						<MdOutlineDashboard />
					</IconContainer>
					Accueil
				</ElemList>
				<ElemList>
					<IconContainer>
						<ImProfile />
					</IconContainer>
					Réservations
				</ElemList>
				<ElemList>
					<IconContainer>
						<MdOutlinePeopleAlt />
					</IconContainer>
					Clients habitués
				</ElemList>
			</ListContainer>
		</Container>
	);
};

const Container = styled.div`
	margin-top: 5em;
	display: flex;
	justify-content: flex-end;
	width: 100%;
`;
const ListContainer = styled.ul`
	width: 90%;
`;

const ElemList = styled.li`
	font-size: 1em;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	color: #fefefe;
	padding: 2em 1em;
	border-radius: 20px 0px 0px 20px;
	cursor: pointer;
	:hover {
		background-color: var(--main-color);
		color: #2e2f2f;
	}
`;

const IconContainer = styled.div`
  margin-right: 1em;
`;
export default LinkContainer;
