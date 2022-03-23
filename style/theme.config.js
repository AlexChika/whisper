import { createGlobalStyle } from "styled-components";
export const lightTheme = {
  priBg: "rgba(236, 236, 236, 0.5)",
  text: "black",
  navline: "black",
  secBg: `rgba(255, 255, 255, 0.7
    )`,
};
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
  border-radius: 10px;
  word-wrap:break-word;
}
html{
      -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}
body {
  width:100vw;
   background: ${({ theme }) => theme.priBg};
   color: ${({ theme }) => theme.text};
   font-family: sans-serif !important;
   font-weight: 300;
   font-style: normal;
   overflow-wrap: break-word;
    word-break: break-word;
    word-wrap: break-word;
   -webkit-transition: all 0.3s linear;
   transition: all 0.3s linear;
   -webkit-scroll-behavior: smooth;
   -moz-scroll-behavior: smooth;
    -ms-scroll-behavior: smooth;
    scroll-behavior: smooth;
    -webkit-scroll-behavior: smooth;
    -moz-scroll-behavior: smooth;
    -ms-scroll-behavior: smooth;
}
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-track {
  background-color:${({ theme }) => theme.priBg};
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background-color:rgb(205, 207, 236);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgb(150, 154, 214);
}
input, button,a ,select, textarea{
border:none;
outline:none;
color:inherit;
text-decoration:none;
color: inherit;
cursor: pointer;
-webkit-tap-highlight-color: transparent;
}
.border{
  border:${({ theme }) => `1px solid ${theme.navline}`}
}
.border-b{
  border-bottom:${({ theme }) => `1px solid ${theme.navline}`}
}
.border-t{
  border-top:${({ theme }) => `1px solid ${theme.navline}`}
}
.bg{
   background-color:${({ theme }) => theme.secBg}
}
.bg-p{
   background-color:${({ theme }) => theme.priBg}
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
nav a{
  padding:10px;
}
nav div ul {
  display: flex;
  flex-grow:0.4;
  justify-content: space-around;
}
nav div ul li,
nav div span {
  border-radius: 10px;
  background-color:${({ theme }) => theme.secBg};
  display:flex;
 align-items:center;
 justify-content:center;
}
.mb-10{
  margin-bottom:10px;
}
.mb-20{
  margin-bottom:20px;
}
.mb-30{
  margin-bottom:30px;
}
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
