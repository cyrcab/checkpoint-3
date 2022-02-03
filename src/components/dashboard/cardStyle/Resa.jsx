import styled from "styled-components";

const CardInfo = ({ date, nbrPerson }) => {
	return (
		<Container>
			<header>
				<Titre value='reservation' />
			</header>
			<main>
				<DateContainer date={date} />
				<InfosUsers nbrPerson={nbrPerson} />
				<ButtonContainer />
			</main>
		</Container>
	);
};

const Container = styled.div``;
export default CardInfo;
