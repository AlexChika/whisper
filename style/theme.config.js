import { createGlobalStyle } from "styled-components";
export const lightTheme = {
  priBg: "rgba(236, 236, 236, 0.5)",
  text: "black",
  navline: "black",
  secBg: `rgba(255, 255, 255, 0.7
    )`,
};
export const lightMixed = {
  priBg: "black",
  text: "black",
  navline: "rgb(160, 160, 160)",
  secBg: "rgb(160, 160, 160)",
};
export const darkmixed = {};
export const darkTheme = {
  priBg: "rgb(0, 0, 0)",
  text: "white",
  navline: "white",
  secBg: `rgba(24, 24, 24, 1)`,
};

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "poppins", sans-serif;
  font-weight: 500;
  border-radius: 10px;
}
body {
   background: ${({ theme }) => theme.priBg};
   color: ${({ theme }) => theme.text};
   font-family: sans-serif !important;
   font-weight: 400;
   font-style: normal;
   transition: all 0.3s linear;
   min-height:100vh;
     background-attachment: fixed;

}
figure{
   background: url( 're' );
}
input, button,a {
border:none;
outline:none;
color:inherit;
text-decoration:none;
padding:10px;
  color: inherit;

}
.border{
  border:${({ theme }) => `1px solid ${theme.navline}`}
}
.bg{
   background-color:${({ theme }) => theme.secBg}
}
.color{
   color: ${({ theme }) => theme.text};
}
li {
  list-style: none;
}
/*  */
nav div {
  height: 8vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
 border-bottom:${({ theme }) => `2px solid ${theme.navline}`}
}
nav div ul {
  display: flex;
  flex-grow:0.4;
  justify-content: space-around;
}
nav div ul li,
nav div span {
  padding: 5px ;
  border-radius: 10px;
  background-color:${({ theme }) => theme.secBg}
}

/* Real styling */
.mb-10{
  margin-bottom:10px;
}
/* End of Real styling */
/* .box1::before {
  content: "";
  position: absolute;
  border: 2px solid gray;
  width: 100%;
  height: 100%;
  left: -20px;
  top: 20px;
  z-index: -1;
} */
@media screen and (max-width: 500px) {
  nav div ul li,
nav div span {
 font-size:12px;
}
}
;
@media screen and (max-width: 425px) {
  nav div ul li{
 font-size:11px;
}
}
`;
