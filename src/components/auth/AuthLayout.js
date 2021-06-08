import styled from "styled-components";

const Layout = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;

const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

function AuthLayout({ children }) {
  return (
    <Layout>
      <Wrapper>{children}</Wrapper>
    </Layout>
  );
}

export default AuthLayout;
