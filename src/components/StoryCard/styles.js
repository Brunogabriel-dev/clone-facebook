import styled from "styled-components";

export const Container = styled.div`
  width: 90px;
  height: 150px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  position: relative;

  @media (max-width: 600px) {
    &:last-child {
      display: none;
    }
  }

  @media (max-width: 470px) {
    width: 60px;
    height: 130px;
    &:last-child {
      display: none;
    }
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  transition: transform 0.5s ease;
  position: absolute;

  &:hover {
    transform: scale(1.1);
  }
`;



