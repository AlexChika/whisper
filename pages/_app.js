import { ThemeProvider } from "styled-components";
import {
  GlobalStyles,
  lightTheme,
  darkTheme,
  lightMixed,
} from "../style/theme.config";
function MyApp({ Component, pageProps }) {
  const theme = false;
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
// theme ? lightTheme : darkTheme
