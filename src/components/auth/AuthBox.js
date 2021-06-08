import styled from "styled-components";

const Container = styled.div`
  border: 1px solid;
  border-color: ${(props) => props.theme.borderColor};
  border-radius: 3px;
  background-color: ${(props) => props.theme.boxColor};
  padding: 30px 50px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

function AuthBox({ children }) {
  return <Container>{children}</Container>;
}

export default AuthBox;
