import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  background-color: #fff;
  box-shadow: 0 0 3px 1px #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Context = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 10px;
  gap: 5px;
`;

export const Section = styled.section`
  display: flex;
  gap: 10px;
  width: 100%;

  @media (max-width: 550px) {
    gap: 3px;
  }

  > svg,
  img {
    width: 32px;
    height: 32px;

    @media (max-width: 350px) {
      width: 25px;
      height: 25px;
    }
  }

  &.section2 {
    max-width: 470px;
  }

  &.section3 {
    justify-content: flex-end;
  }
`;
