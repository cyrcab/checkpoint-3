import styled from "styled-components";
import { BiUserCircle } from "react-icons/all";
import axios from "axios";

const CardInfoUser = ({ user, userList, setUserList, setUserToDelete }) => {
	const { lastname, firstname, mail, id } = user;

	const handleDeleteUser = (userId) => {
		axios
			.delete(`http://localhost:5001/api/users/${userId}`)
			.then((res) => res.data)
			.then((userDeleted) => {
				setUserToDelete(userDeleted);
				return userDeleted;
			})
			.then((userDeleted) => setUserList(userList.filter((user) => user.id !== userDeleted.id)))
			.catch((err) => console.log(err));
	};

	return (
		<Container>
			<Header>
				<ImgContainer>
					<BiUserCircle size={100} />
				</ImgContainer>
			</Header>
			<Content>
				<InfosUsersContainer>
					<Infouser>Name: {lastname}</Infouser>
					<Infouser>Firstname: {firstname}</Infouser>
					<Infouser>mail: {mail}</Infouser>
				</InfosUsersContainer>
				<ButtonContainer>
					<DeleteButton onClick={() => handleDeleteUser(id)}>Delete</DeleteButton>
				</ButtonContainer>
			</Content>
		</Container>
	);
};
const Container = styled.div`
	border: 1px solid black;
	padding: 1em;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 15%;
`;

const Header = styled.header`
	text-align: center;
	width: 100%;
	border-bottom: 1px solid black;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
`;

const ButtonContainer = styled.footer`
	width: 100%;
`;

const DeleteButton = styled.button`
	padding: 0.5em;
	margin-top: 1em;
	width: 100%;
	border: 2px solid var(--secondary-color);
	font-size: 1em;
	color: var(--text-light-color);
	background-color: var(--secondary-color);
	cursor: pointer;
	:hover {
		color: var(--secondary-color);
		border: 2px solid var(--secondary-color);
		background: none;
	}
`;

const ImgContainer = styled.div``;

const InfosUsersContainer = styled.ul`
	margin-top: 1em;
`;

const Infouser = styled.li``;
export default CardInfoUser;
