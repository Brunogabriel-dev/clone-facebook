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

`;