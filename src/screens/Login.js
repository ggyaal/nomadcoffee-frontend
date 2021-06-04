import styled from "styled-components";
import { isLoggedInVar } from "../apollo";

const Container = styled.div``;

const Title = styled.h1`
  color: ${(props) => props.theme.texts};
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.btn};
`;

const Login = () => (
  <Container>
    <Title>Login</Title>
    <Button onClick={() => isLoggedInVar(true)}>LogIn</Button>
  </Container>
);

export default Login;
