import styled from "styled-components";

const CardInfoResa = ({ date, nbrPerson }) => {
	return (
		<Container>
			<Header>
				<Title></Title>
			</Header>
			<Content>
				<DateContainer>{date}</DateContainer>
				<InfosUsers>{nbrPerson}</InfosUsers>
				<ButtonContainer>
					<ConfirmButton />
					<DeleteButton />
				</ButtonContainer>
			</Content>
		</Container>
	);
};

const Header = styled.header``;

const Title = styled.h2``;

const Content = styled.div``;

const Container = styled.div``;

const ButtonContainer = styled.footer``;

const ConfirmButton = styled.button``;

const DeleteButton = styled.button``;

const DateContainer = styled.div``;

const InfosUsers = styled.div``;
export default CardInfoResa;
