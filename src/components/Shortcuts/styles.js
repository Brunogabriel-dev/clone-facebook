import styled from "styled-components";

export const Container = styled.div`
  max-width: 300px;
  width: 17%;

  @media (max-width:600px) {
    width: auto;
    position: absolute;
    left: 10px;
  }
`;