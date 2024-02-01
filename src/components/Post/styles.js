import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 1px 2px #0003;
  max-width: 470px;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 5px;
`;

export const divNameTime = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  color: #050505;
  font-weight: 600;
  font-size: 13px;
`;

 export const timestamp = styled.section`
   color: darkgray;
   font-weight: 600;
   font-size: 9px;
 `;

 export const SectionHeader = styled.section`
   display: flex;
   align-items: center;
   justify-content: center;

   svg {
    cursor: pointer;
   }
 `;

 export const Desc = styled.span`
   font-weight: 400px;
   font-size: 14px;
   padding: 8px 4px;
 `;

 export const SectionImage = styled.section``;

 export const ImagePost = styled.img`
   max-width: 450px;
   max-height: 300px;
   width: 100%;
   border-radius: 5px;
 `;

 export const Divider = styled.div`
   margin: 10px 0 2px;
   border-top: solid 1px lightgray;
 `
