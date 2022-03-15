import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "../style/theme.config";
function MyApp({ Component, pageProps }) {
  const theme = true;
  return (
    <>
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
// theme ? lightTheme : darkTheme
