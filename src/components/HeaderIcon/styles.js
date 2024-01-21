import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 45px;
align-items: center;
justify-content: center;
border-radius: 10px;
padding: 0 25px;
cursor: pointer;
display: ${(props) => (props.display === "mobile" ? "none" : "flex")};

&:hover {
  background-color: #f0f2f5;
}

svg {
  width: 22px;
  height: 22px;
  color: #65676b;

  &.avtive {
    color: #1b74e4
  }

  @media (max-width: 350px) {
    width: 16px;
    height: 16px;
  }
}

@media (max-width: 825px) {
  display: ${(props) => (props.display !== "web" ? "flex" : "none")};
}
`;
