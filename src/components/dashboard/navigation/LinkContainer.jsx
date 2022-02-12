import styled from "styled-components";
import { MdOutlineDashboard, MdOutlinePeopleAlt, ImProfile } from "react-icons/all";
import { Link } from "react-router-dom";

const LinkContainer = () => {
	return (
		<Container>
			<ListContainer>
				<Link to="/admin">
					<ElemList>
						<IconContainer>
							<MdOutlineDashboard />
						</IconContainer>
						Accueil
					</ElemList>
				</Link>
				<Link to="/admin/reservations">
					<ElemList>
						<IconContainer>
							<ImProfile />
						</IconContainer>
						Réservations
					</ElemList>
				</Link>
				<Link to="/admin/users">
					<ElemList>
						<IconContainer>
							<MdOutlinePeopleAlt />
						</IconContainer>
						Clients habitués
					</ElemList>
				</Link>
			</ListContainer>
		</Container>
	);
};

const Container = styled.div`
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
