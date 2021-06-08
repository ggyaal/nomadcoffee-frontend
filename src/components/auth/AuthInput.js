import styled from "styled-components";

const AuthInput = styled.input`
  width: 100%;
  margin-top: 5px;
  border: 1px solid;
  border-color: ${(props) => props.theme.borderColor};
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
`;

export default AuthInput;
