import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 1px 2px #0003;
  max-width: 470px;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 5px;
  justify-content: center;

  .Btns {
    border-radius: 5px;
    padding: 5px 0;
    &:hover {
      background-color: #0000000d;
    }
  }
`;