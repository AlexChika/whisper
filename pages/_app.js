import { ThemeProvider } from "styled-components";
import {
  GlobalStyles,
  lightTheme,
  darkTheme,
  lightMixed,
} from "../style/theme.config";
function MyApp({ Component, pageProps }) {
  const theme = false;
  console.log(Component);
  return (
    <>
      <ThemeProvider theme={lightMixed}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
// theme ? lightTheme : darkTheme
