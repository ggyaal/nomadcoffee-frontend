import styled from "styled-components";

const AuthButton = styled.button`
  width: 100%;
  text-align: center;
  background-color: ${(props) => props.theme.mainColor};
  margin-top: 10px;
  border: 1px solid;
  border-color: ${(props) => props.theme.borderColor};
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export default AuthButton;
