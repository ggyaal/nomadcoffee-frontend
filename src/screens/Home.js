import styled from "styled-components";
import { logOutWithToken } from "../apollo";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";

const Container = styled.div``;

const Welcome = styled.div`
  text-align: center;
  margin: 50px 0;
  font-size: 30px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.texts};
  text-align: center;
  font-size: 50px;
`;

function Home() {
  return (
    <AuthLayout>
      <Container>
        <Title>HOME</Title>
        <Welcome>Welcome to Nomad Coffee.</Welcome>
        <Welcome>We can make soooooo really good tasty coffee!</Welcome>
        <Welcome>Ready to make it??😘</Welcome>
        <AuthButton onClick={() => logOutWithToken()}>Log Out</AuthButton>
      </Container>
    </AuthLayout>
  );
}

export default Home;
