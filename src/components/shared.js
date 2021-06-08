import styled from "styled-components";

export const Info = styled.div`
  color: ${(props) => props.color};
  margin: 10px 0;
  font-weight: 600;
  transition: 1s;
  opacity: ${(props) => (props.isInfo ? 1 : 0)};
`;
