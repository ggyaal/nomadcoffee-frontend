import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  texts: "#2c3e50",
  bgColor: "#ecf0f1",
  btn: "#8e44ad",
};

export const darkTheme = {
  texts: "#ecf0f1",
  bgColor: "#2c3e50",
  btn: "#f1c40f",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}
    body {
        background-color: ${(props) => props.theme.bgColor}
    }
`;
