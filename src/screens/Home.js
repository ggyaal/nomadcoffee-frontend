import styled from "styled-components";
import { isLoggedInVar } from "../apollo";

const Container = styled.div``;

const Title = styled.h1`
  color: ${(props) => props.theme.texts};
`;

const Button = styled.button`
  color: ${(props) => props.theme.btn};
`;

const Home = () => (
  <Container>
    <Title>HOME</Title>
    <Button onClick={() => isLoggedInVar(false)}>Log Out</Button>
  </Container>
);

export default Home;
