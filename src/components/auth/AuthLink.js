import { Link } from "react-router-dom";
import styled from "styled-components";

const SLink = styled(Link)`
  margin-left: 5px;
`;

function AuthLink({ route, name }) {
  return <SLink to={route}>{name} &rarr;</SLink>;
}

export default AuthLink;
