import { useReactiveVar } from "@apollo/client";
import {
  faMoon,
  faSun,
  faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { darkModeOnOff, isDarkmodeVar } from "../apollo";

const Container = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  color: ${(props) => (props.isDark ? null : "#ecf0f1")};
`;

function DarkMode() {
  const isDarkmode = useReactiveVar(isDarkmodeVar);
  return (
    <Container isDark={isDarkmode}>
      <FontAwesomeIcon
        icon={isDarkmode ? faToggleOn : faToggleOff}
        size="4x"
        onClick={() => darkModeOnOff()}
      />
      <FontAwesomeIcon icon={isDarkmode ? faMoon : faSun} size="2x" />
    </Container>
  );
}

export default DarkMode;
