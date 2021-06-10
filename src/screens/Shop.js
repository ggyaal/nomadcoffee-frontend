import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import Category from "../components/Category";

const SEE_COFFEESHOP_QUERY = gql`
  query seeCoffeeShop($id: Int!, $page: Int!) {
    seeCoffeeShop(id: $id) {
      name
      latitude
      longitude
      user {
        email
        name
        avatarURL
      }
      photos(page: $page) {
        url
      }
      categories {
        id
        name
      }
    }
  }
`;

const Container = styled.div``;

const Name = styled.div`
  font-size: 50px;
  margin-bottom: 30px;
`;
const Small = styled.small`
  margin: 10px 0;
`;
const User = styled.div`
  margin-top: 20px;
`;

function Shop() {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const { loading, data } = useQuery(SEE_COFFEESHOP_QUERY, {
    variables: { id: parseInt(id, 10), page },
  });
  const shop = data?.seeCoffeeShop;
  return (
    <AuthLayout>
      {loading ? (
        <div>LOADING...</div>
      ) : (
        <Container>
          <Name>{shop.name}</Name>
          {shop.categories?.map((category) => (
            <Category key={category.id} id={category.id} name={category.name} />
          ))}
          {shop.latitude ? <Small>{shop.latitude}</Small> : null}
          {shop.longitude ? <Small>{shop.longitude}</Small> : null}
          <User>{shop.user.name}</User>
        </Container>
      )}
    </AuthLayout>
  );
}

export default Shop;
