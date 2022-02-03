import styled from "styled-components";

const LinkContainer = () => {
  return (
    <Container>
      <ListContainer>
        <ElemList>Accueil</ElemList>
        <ElemList>Réservations</ElemList>
        <ElemList>Clients habitués</ElemList>
      </ListContainer>
    </Container>
  );
}

const Container = styled.div`

`;
const ListContainer = styled.ul``;

const ElemList = styled.li``
export default LinkContainer;