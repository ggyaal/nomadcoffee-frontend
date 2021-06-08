import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const AuthInputErr = styled.div`
  border: 1px solid tomato;
  position: absolute;
  left: 80%;
  top: 10px;
  width: max-content;
  border-radius: 5px;
  color: tomato;
  padding: 5px;
  background-color: ${(props) => props.theme.boxColor};
  transition: 1s;
  opacity: ${(props) => (props.message ? 1 : 0)};
`;

function AuthInputCon({ message, children }) {
  const isMessage = Boolean(message);
  return (
    <Container>
      <AuthInputErr message={isMessage}>{message}</AuthInputErr>
      {children}
    </Container>
  );
}

AuthInputCon.propTypes = {
  message: PropTypes.string,
};

export default AuthInputCon;
