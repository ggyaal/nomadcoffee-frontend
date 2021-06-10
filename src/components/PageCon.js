import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Page = styled.div`
  border: 1px solid;
  border-color: ${(props) => props.theme.borderColor};
  border-radius: 5px;
  background-color: ${(props) =>
    props.isPage ? props.theme.linkColor : props.theme.boxColor};
  padding: 5px 10px;
  font-weight: 600;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const createArr = (num) => {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(i);
  }
  return arr;
};

function PageCon({ totalPage, setPage, page }) {
  return (
    <Container page={page}>
      {createArr(totalPage).map((_, idx) => (
        <Page
          key={idx}
          onClick={() => setPage(idx + 1)}
          isPage={page === idx + 1}
        >
          {idx + 1}
        </Page>
      ))}
    </Container>
  );
}

export default PageCon;
