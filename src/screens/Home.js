import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logOutWithToken } from "../apollo";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import PageCon from "../components/PageCon";
import ShopBlock from "../components/ShopBlock";
import routes from "../routes";

const SEE_COFFEESHOPS_QUERY = gql`
  query seeCoffeeShops($page: Int!) {
    seeCoffeeShops(page: $page) {
      coffeeShops {
        id
        name
        user {
          name
          email
        }
        categories {
          id
          name
        }
      }
      totalShops
    }
  }
`;

const Container = styled.div``;

const Welcome = styled.div`
  text-align: center;
  margin: 50px 0;
  font-size: 30px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.texts};
  text-align: center;
  font-size: 50px;
`;

const SLink = styled(Link)`
  border: 1px solid;
  border-color: ${(props) => props.theme.borderColor};
  border-radius: 5px;
  padding: 5px;
  background-color: ${(props) => props.theme.boxColor};
`;

function Home() {
  const [page, setPage] = useState(1);
  const { loading, data } = useQuery(SEE_COFFEESHOPS_QUERY, {
    variables: { page },
  });

  const calcTotalPage = (totalShops) => Math.ceil(totalShops / 5);

  return (
    <AuthLayout>
      <Container>
        <Title>HOME</Title>
        <Welcome>Welcome to Nomad Coffee.</Welcome>
        <SLink to={routes.add}>Add Your Shop.</SLink>
        {data?.seeCoffeeShops?.totalShops > 5 ? (
          <PageCon
            totalPage={calcTotalPage(data.seeCoffeeShops.totalShops)}
            setPage={setPage}
            page={page}
          />
        ) : null}
        {loading ? (
          <div>LOADING...</div>
        ) : (
          data?.seeCoffeeShops?.coffeeShops?.map((shop) => (
            <ShopBlock key={shop.id} shop={shop} />
          ))
        )}
        <AuthButton onClick={() => logOutWithToken()}>Log Out</AuthButton>
      </Container>
    </AuthLayout>
  );
}

export default Home;
