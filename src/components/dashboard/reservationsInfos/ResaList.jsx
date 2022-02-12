import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Resa from "../cardStyle/Resa";

const ResaList = () => {
	const [resaList, setResaList] = useState([]);
	const [resaToDelete, setResaToDelete] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5001/api/reservations")
			.then((res) => res.data)
			.then((reservation) => setResaList(reservation));
	}, [resaToDelete]);

	return (
		<ListContainer>
			{resaList.map((resa) => (
				<Resa
					date={resa.date.slice(0, 10)}
					nbrPerson={resa.nbrGuest}
					id={resa.id}
					resaList={resaList}
					setResaList={setResaList}
					setResaToDelete={setResaToDelete}
				/>
			))}
		</ListContainer>
	);
};

const ListContainer = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: var(--main-color);
	padding: 2em;
	flex-wrap: wrap;
	width: 80%;
`;

export default ResaList;
