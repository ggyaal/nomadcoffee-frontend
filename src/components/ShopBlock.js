import { Link } from "react-router-dom";
import styled from "styled-components";
import AuthBox from "./auth/AuthBox";
import Category from "./Category";

const SLink = styled(Link)`
  font-size: 25px;
`;

const User = styled.div`
  margin-top: 20px;
`;

function ShopBlock({ shop }) {
  return (
    <AuthBox>
      <SLink to={`/shop/${shop.id}`}>{shop.name}</SLink>
      {shop.categories?.map((category) => (
        <Category key={category.id} id={category.id} name={category.name} />
      ))}
      <User>{`${shop.user.name}<${shop.user.email}>`}</User>
    </AuthBox>
  );
}

export default ShopBlock;
