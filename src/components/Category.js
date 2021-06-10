import { Link } from "react-router-dom";
import styled from "styled-components";

const SCategory = styled.span`
  border: 1px solid;
  border-color: ${(props) => props.theme.borderColor};
  margin-left: 10px;
  padding: 5px;
  border-radius: 10px;
  font-size: 12px;
`;

function Category({ id, name }) {
  return (
    <SCategory>
      <Link to={`/category/${id}`}>{name}</Link>
    </SCategory>
  );
}

export default Category;
