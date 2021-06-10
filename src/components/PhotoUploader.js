import styled from "styled-components";

const Container = styled.div`
  margin: 10px 0;
  small {
    opacity: 0.7;
  }
  input {
    margin-top: 5px;
  }
`;

function PhotoUploader({ title, register }) {
  return (
    <Container>
      <small>{title}</small>
      <input type="file" {...register(title)} accept="image/*" />
    </Container>
  );
}

export default PhotoUploader;
