import GlobalStyles from "@styles/globalStyles";
import theme from "@styles/theme";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const  StyleProvider = ({  children }: {children: ReactNode}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export default StyleProvider;
