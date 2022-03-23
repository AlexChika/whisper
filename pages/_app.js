import Footer from "../components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "../style/theme.config";
import { useState, useEffect } from "react";
function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const storagetheme = localStorage.getItem("theme");
    setTheme(storagetheme);
  });
  var isTrueSet = theme === "light";
  return (
    <>
      <ThemeProvider theme={isTrueSet ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
