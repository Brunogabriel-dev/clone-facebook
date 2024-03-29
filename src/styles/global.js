import { createGlobalStyle} from "styled-components"

 const GlobalStyles = createGlobalStyle`

 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 body {
  width: 100vw;
  height: 100vw;
  background-color: #f0f2f5;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 }
 `;

 export default GlobalStyles;