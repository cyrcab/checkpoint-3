import styled from "styled-components";
import axios from "axios";

const CardInfoResa = ({ date, nbrPerson, id, resaList, setResaList }) => {
	const handleDeleteReservation = (resaId) => {
		axios
			.delete(`http://localhost:5001/api/reservations/${resaId}`)
			.then((res) => res)
			.catch((err) => console.log(err));

		const resaToDelete = resaList.filter((resa) => resa.id === resaId);
		if (resaList.includes(resaToDelete)) {
			setResaList(resaList.filter((resa) => resa.id !== resaToDelete.id));
		}
	};
	return (
		<Container>
			<Header>
				<Title>Réservation n°{id}</Title>
			</Header>
			<Content>
				<DateContainer>Date: {date}</DateContainer>
				<InfosUsers>Couvert : {nbrPerson}</InfosUsers>
				<ButtonContainer>
					<ConfirmButton>Confirmer</ConfirmButton>
					<DeleteButton onClick={() => handleDeleteReservation(id)}>Supprimer</DeleteButton>
				</ButtonContainer>
			</Content>
		</Container>
	);
};

const Title = styled.h3`
	font-size: 1.4em;
`;

const Container = styled.div`
	border: 1px solid black;
	padding: 1em;
	display: flex;
	margin-bottom: 1em;
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
	margin-top: 1em;
`;

const ButtonContainer = styled.footer`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-top: 1em;
`;

const DeleteButton = styled.button`
	padding: 0.5em;
	font-size: 0.9em;
	border: 2px solid var(--secondary-color);
	color: var(--text-light-color);
	background-color: var(--secondary-color);
	cursor: pointer;
	:hover {
		color: var(--secondary-color);
		border: 2px solid var(--secondary-color);
		background: none;
	}
`;
const ConfirmButton = styled.button`
	padding: 0.5em;
	font-size: 0.9em;
	border: 2px solid var(--confirm-color);
	color: var(--confirm-color);
	background: none;
	cursor: pointer;
	:hover {
		color: var(--text-light-color);
		border: 2px solid var(--confirm-color);
		background-color: var(--confirm-color);
	}
`;

const DateContainer = styled.div``;

const InfosUsers = styled.div`
	margin-top: 1em;
`;
export default CardInfoResa;
