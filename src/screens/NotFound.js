import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";

const H1 = styled.h1`
  text-align: center;
  font-size: 50px;
`;

function NotFound() {
  return (
    <AuthLayout>
      <H1>Not Found.</H1>
    </AuthLayout>
  );
}

export default NotFound;
