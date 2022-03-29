import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  .card {
    max-width: 400px;
    height: 400px;
    border: 1px solid black;
    padding: 20px;
    box-shadow: 5px 10px 8px #888888;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    border-radius: 30px;

    img {
      border-radius: 30px;
    }
  }
`;
