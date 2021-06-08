import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  mainColor: "#8c4747",
  texts: "#2c3e50",
  bgColor: "#926a58",
  borderColor: "#2c3e50",
  boxColor: "#f5f6fa",
  btn: "#8e44ad",
  linkColor: "#f39c12",
};

export const darkTheme = {
  mainColor: "#6b2727",
  texts: "#f1f2f6",
  bgColor: "#2f3640",
  borderColor: "#f5f6fa",
  boxColor: "#3a2020",
  btn: "#f1c40f",
  linkColor: "#f1c40f",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}
    input, button, a {
      all: unset;
    }
    body {
        background-color: ${(props) => props.theme.bgColor};
        color: ${(props) => props.theme.texts};
    }
    a {
      color: ${(props) => props.theme.linkColor};
      font-size: 700;
      cursor: pointer;
    }
`;
