import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;
  border-radius: 8px;
  width: 98%;

  &:hover {
    background-color: #0000000d;
  }

  svg,
  img {
    width: 20px;
    height: 20px;
    color: ${(props) => (props.colorIcon ? props.colorIcon : "#1b74e4")};

    @media (max-width: 550px) {
      display: none;
    }
  }
`;