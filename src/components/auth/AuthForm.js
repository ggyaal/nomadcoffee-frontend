import styled from "styled-components";

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  form {
    width: 100%;
    margin-top: 30px;
  }
`;

function AuthForm({ children }) {
  return <Form>{children}</Form>;
}

export default AuthForm;
